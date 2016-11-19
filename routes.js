var SnapListView = require('./views/snap_list'),
    SnapDetailView = require('./views/snap_detail');

var routes = [
        {
            name: 'index',
            view: SnapListView,
            pattern: /^\/?$/,
        },
        {
            name: 'snaps',
            view: SnapListView,
            pattern: /^list\/?$/,
        },
        {
            name: 'snap-detail',
            view: SnapDetailView,
            pattern: /^snap\/(\d+)\/?$/,
        },
    ];

module.exports = routes;
