var React = require('react');

var SnapThumbComponent = require('./snap_thumb.jsx');

var SnapListComponent = React.createClass({
  getThumbs: function () {
    return this.props.snaps.map(function (view) {
      return view.getComponent();
    });
  },
  render: function () {
    return (
      <div className="snap-thumbs">
        {this.getThumbs()}
      </div>
    );
  },
});

module.exports = SnapListComponent;
