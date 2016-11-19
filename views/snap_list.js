var React = require('react'),
    Snaps = require('../collections/snaps'),
    SnapListComponent = require('../components/snap_list.jsx')

var SnapListView = function (route, urlArgs) {
    var component = React.createElement(SnapListComponent, {
        collection: Snaps,
    });
    return new Promise(function (resolve, reject) {
        Snaps.ready().then((collection) => resolve(component));
    });
}
module.exports = SnapListView;
