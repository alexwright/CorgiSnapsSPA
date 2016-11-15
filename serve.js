require("babel-register")({
    extensions: [
        ".es6",
        ".jsx"
    ],
    presets: [
        "react",
        "es2015",
    ],
});
var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactDOMServer = require('react-dom/server');
var routes = require('./routes');
var Page = require('./page.jsx'),
    root = '/';

var wrap_component = function (component, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html',
    });
    var html = [
        '<!doctype html><html><body><div className="app" id="app-main">',
        ReactDOMServer.renderToString(component),
        '</div>',
        '<script>window.$ = {};</script>',
        '<script src="/static/built.js"></script></body></html>',
    ].join('');
    response.write(html);
    response.end();
};

var http = require('http'),
    server = http.createServer(function (request, response) {
        console.log("url: ", request.url);
        if (request.url.substr(0, root.length) != root) {
            response.writeHead(400);
            response.write('Request URI is outside of the site root?');
            response.end();
            return;
        }
        var fragment = request.url.substr(root.length),
            matchedRoutes = routes.filter(function (route) {
                    return route.pattern.test(fragment);
                });

        if (matchedRoutes.length === 0) {
            response.writeHead(404);
            response.write("URI didn't match any routes");
            response.end();
            return;
        }
        var route = matchedRoutes[0];
        console.log("Route: ", route);
        if (route.view.fromRoute) {
            var view = route.view.fromRoute(route, []);
            wrap_component(view.getComponent(), response);
        }
        else {
            console.error("unsupported route type?", route);
            response.writeHead(500);
            response.write(":(");
            response.end();
        }
    });
server.listen(8501);
