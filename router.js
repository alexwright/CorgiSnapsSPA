var Backbone = require('backbone'),
    ReactDom = require('react-dom');

var routes = require('./routes');

var SnapsRouter = Backbone.Router.extend({
        initialize: function () {
            var router = this;
            routes.forEach(function (route) {
                router.route(route.pattern, function (urlArgs) {
                    console.log("Routing: ", route, urlArgs);
                    this.launchRoute(route, urlArgs);
                });
            });
        },
        launchRoute: function (route, urlArgs) {
            var view = route.view(route, urlArgs);
            ReactDom.render(view, this.getContainer());
        },
        getContainer: function () {
            var container = document.getElementById("app-main");
            if (container) {
                return container;
            }
            return document.body;
        },
    });

module.exports = SnapsRouter;
