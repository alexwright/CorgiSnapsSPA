var Backbone = require('backbone'),
    ReactDom = require('react-dom');

var routes = require('./routes'),
    Page = require('./page.jsx');

var SnapsRouter = Backbone.Router.extend({
        initialize: function () {
            var router = this;
            routes.forEach(function (route) {
                router.route(route.pattern, function () {
                    console.log("Router matched route:", this, route, arguments);
                    router.launchRoute(route, arguments);
                }, route.name);
            });
        },
        launchRoute: function (route, urlArgs) {
            var view = this.getView(route, urlArgs),
                viewComponent = view.getComponent();
            /*
            var page = new Page({
                appMain: childComponent,
            });
            */
            /*
            view.setElement(this.getContainer());
            view.render();
            */
            ReactDom.render(viewComponent, this.getContainer());
        },
        getContainer: function () {
            var container = document.getElementById("app-main");
            if (container) {
                return container;
            }
            return document.body;
        },
        getView: function (route, urlArgs) {
            var viewClass = this.getViewClass(route);
            if (viewClass.fromRoute) {
                return route.view.fromRoute(route, urlArgs);
            }
            else {
                throw Error("View Class doesn't implement fromRoute()");
            }
        },
        getViewClass: function (route) {
            if (route.view) {
                return route.view;
            }
            throw Error("No view found on this route");
        },
    });

module.exports = SnapsRouter;
