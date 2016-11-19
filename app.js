var Backbone = require('./mybone');

var Router = require('./router'),
    router = new Router();

(function () {
    console.log("go time now?");
    Backbone.history.start({pushState: true});

    window.nav = function (frag) {
        Backbone.history.navigate(frag, { trigger: true });
    };
})();
