var Backbone = require('./mybone'),
    ReactDom = require('react-dom');

var routes = require('./routes');
var delegate = require('./delegate');

var SnapsRouter = Backbone.Router.extend({
        initialize: function () {
            var router = this;
            routes.forEach(function (route) {
                router.route(route.pattern, function (urlArgs) {
                    console.log("Routing: ", route, urlArgs);
                    this.launchRoute(route, urlArgs);
                });
            });

            var container = this.getContainer(),
                router = this;
            delegate(container, 'click', 'a[data-href]', function (ev, target) {
                ev.preventDefault();
                if (target.dataset.href) {
                    this.navigateTo(target.dataset.href);
                }
            }.bind(this));
        },
        launchRoute: function (route, urlArgs) {
            route.view(route, urlArgs)
                .then(this.renderComponent.bind(this))
                .catch((error) => alert(error.message));
        },
        getContainer: function () {
            var container = document.getElementById("app-main");
            if (container) {
                return container;
            }
            return document.body;
        },
        renderComponent: function (component) {
            ReactDom.render(component, this.getContainer());
        },
        navigateTo: function (fragment) {
            this.navigate(fragment, { trigger: true });
        },
    });

module.exports = SnapsRouter;
