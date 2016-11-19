var React = require('react');

var SnapThumbComponent = React.createClass({
  getImgUrl: function () {
    return this.props.model.get('image');
  },
  getDetailUrl: function () {
    return this.props.model.getDetailUrl();
  },
  render: function () {
    return (
      <div className="snap-thumb">
        <a href={this.getDetailUrl()}><img width="200" src={this.getImgUrl()} /></a>
      </div>
    );
  },
});

module.exports = SnapThumbComponent;
