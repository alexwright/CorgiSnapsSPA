var Backbone = require('./xeenbone');

Backbone.ajax = require('backbone.fetch');

Backbone.Collection = Backbone.Collection.extend({
    // init _ready state is false
    _ready: false,
    ready: function () {
        return new Promise((resolve, reject) => {
            if (this._ready) {
                resolve(this);
            }
            else {
                this.listenTo(this, 'sync', () => {
                    this._ready = true;
                    resolve();
                });
                this.fetch();
            }
        });
    },
});

module.exports = Backbone;
