var React = require('react'),
    App = require('../components/app.jsx'),
    Snaps = require('../collections/snaps'),
    SnapListComponent = require('../components/snap_list.jsx')

var SnapListView = function (router, route, urlArgs) {
    var component = React.createElement(App, {
        collection: Snaps,
        router: router,
    });
    return new Promise(function (resolve, reject) {
        Snaps.ready().then((collection) => resolve(component));
    });
}
module.exports = SnapListView;
