var Backbone = require('../mybone');

var Snap = require('../models/snap.js');

var Snaps = Backbone.Collection.extend({
        model: Snap,
        url: function () {
            return 'https://corgisnaps.com/api/snaps';
        },
    }),
    snaps = new Snaps();

if (typeof window === 'undefined') {
    console.log("Not in browser");
    //snaps.add([{"id":1,"image":"http://corgisnaps.com/media/IMG_9455_uXh7kG4.jpg"}]);
}
else {
    window.snaps = snaps;
}
    snaps.add([{"id":1,"image":"http://corgisnaps.com/media/IMG_9455_uXh7kG4.jpg"}]);

module.exports = snaps;
