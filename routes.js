var SnapListView = require('./views/snap_list');

var routes = [
        {
            name: 'snaps',
            view: SnapListView,
            pattern: /^list\/?$/,
        },
        {
            name: 'snap-detail',
            view: null,
            pattern: /^snap\/(\d+)\/?$/,
        },
    ];

module.exports = routes;
