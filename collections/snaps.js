var Backbone = require('../mybone');

var Snap = require('../models/snap.js');

var Snaps = Backbone.Collection.extend({
        model: Snap,
        url: function () {
            return 'https://corgisnaps.com/api/snaps/';
        },
        parse: function (data) {
            if ('results' in data) {
                return data.results;
            }
            return data;
        },
    }),
    snaps = new Snaps();

module.exports = snaps;
