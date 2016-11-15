var Backbone = require('backbone');

var Router = require('./router'),
    router = new Router();

(function () {
    console.log("go time now?");
    Backbone.history.start({pushState: true});
})();
/*
var Router = Backbone.Router.extend({
        routes: {
            'about': 'about',
            'hello': 'hello',
        },

        about: function () {
            console.log('So show about?');
        },
        hello: function () {
            console.log('HI!');
        },
    });
module.exports = {
    'router': new Router(),
    'history':  Backbone.history,
};
*/

