var React = require('react'),
    App = require('../components/app.jsx'),
    Snaps = require('../collections/snaps'),
    SnapDetailComponent = require('../components/snap_detail.jsx');

var SnapDetailView = function (router, route, urlArgs) {
  var snapId = urlArgs[0];
  return Snaps.ready().then(function () {
    if (Snaps.get(snapId)) {
      return React.createElement(App, {
        detailModel: Snaps.get(snapId),
        collection: Snaps,
        router: router,
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
