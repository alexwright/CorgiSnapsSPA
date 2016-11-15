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
        else if (matchedRoutes[0].view.fromRoute) {
            var route = matchedRoutes[0];
            var view = route.view.fromRoute(route, []);

            response.writeHead(200, {
                'Content-Type': 'text/html',
            });
            /*
            var page = new Page({
                appMain: view.getComponent(),
            });
            response.write(ReactDOMServer.renderToString(page.render()));
            */
            var html = [
                '<!doctype html><html><body><div className="app" id="app-main">',
                ReactDOMServer.renderToString(view.getComponent()),
                '</div>',
                '<script>window.$ = {};</script>',
                '<script src="/static/built.js"></script></body></html>',
            ].join('');
            response.write(html);
            response.end();
        }
    });
server.listen(8501);
