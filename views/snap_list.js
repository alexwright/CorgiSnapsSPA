var React = require('react'),
    Snaps = require('../collections/snaps'),
    SnapListComponent = require('../components/snap_list.jsx')

var SnapListView = function (route, urlArgs) {
    return React.createElement(SnapListComponent, {
        collection: Snaps,
    });
}
module.exports = SnapListView;
