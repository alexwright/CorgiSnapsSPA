var React = require('react');

var SnapThumbComponent = require('./snap_thumb.jsx');

var SnapListComponent = React.createClass({
  getThumbs: function () {
    return this.props.collection.map(function (model) {
      return React.createElement(SnapThumbComponent, {
        key: 'thumb-' + model.get('id'),
        model: model,
      });
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
