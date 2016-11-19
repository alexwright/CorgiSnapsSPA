var React = require('react'),
    Snaps = require('../collections/snaps'),
    SnapDetailComponent = require('../components/snap_detail.jsx');

var SnapDetailView = function (route, urlArgs) {
  var snapId = urlArgs[0];
  return Snaps.ready().then(function () {
    if (Snaps.get(snapId)) {
      return React.createElement(SnapDetailComponent, {
        model: Snaps.get(snapId),
      });
    }
    else {
      var error = Error("Snap not found");
      error.code = 404;
      throw error;
    }
  });
};

module.exports = SnapDetailView;
