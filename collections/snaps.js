var Backbone = require('../mybone');

var Snap = require('../models/snap.js');

var Snaps = Backbone.Collection.extend({
        model: Snap,
        url: function () {
            return 'https://corgisnaps.com/api/snaps/';
        },
    }),
    snaps = new Snaps();

module.exports = snaps;
