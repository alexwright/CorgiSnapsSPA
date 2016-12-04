var Backbone = require('./mybone');

var Router = require('./router'),
    router = new Router();

var style = require('./main.less');

(function () {
    console.log("go time now?");
    Backbone.history.start({pushState: true});

    // Silly hack so we can close Modals in a reasonable way
    if (window.history && window.history) {
        window.history.replaceState({ initialPage: true },
                                    null,
                                    window.location.pathname);
    }

    window.nav = function (frag) {
        Backbone.history.navigate(frag, { trigger: true });
    };
})();
