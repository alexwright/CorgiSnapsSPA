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

var wrapComponent = function (component, response) {
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
var sendError = function (code, message, response) {
    response.writeHead(code);
    response.write(message);
    response.end();
};

var http = require('http'),
    server = http.createServer(function (request, response) {
        console.log("url: ", request.url);
        if (request.url.substr(0, root.length) != root) {
            sendError(400, 'URI outside of the site root?', response);
            return;
        }
        var fragment = request.url.substr(root.length),
            matchedRoutes = routes.filter(function (route) {
                    return route.pattern.test(fragment);
                });

        if (matchedRoutes.length === 0) {
            sendError(404, "URI didn't match any routes", response);
            return;
        }
        var route = matchedRoutes[0];
        console.log("Route: ", route);
        if (route.view.fromRoute) {
            var view = route.view.fromRoute(route, []);
            wrapComponent(view.getComponent(), response);
        }
        else if (typeof route.view == 'function') {
            var view = route.view(route, []);
        }
        else {
            sendError(500, "error", response);
            console.error("unsupported route type?", route);
        }
    });
server.listen(8501);
