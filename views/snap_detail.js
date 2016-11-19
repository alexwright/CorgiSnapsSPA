var React = require('react'),
    Snaps = require('../collections/snaps'),
    SnapDetailComponent = require('../components/snap_detail.jsx');

var SnapDetailView = function (route, urlArgs) {
    return React.createElement(SnapDetailComponent, {
        model: Snaps.get(urlArgs[0]),
    });
};

module.exports = SnapDetailView;
