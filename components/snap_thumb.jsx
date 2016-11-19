var React = require('react');

var SnapThumbComponent = React.createClass({
  getImgUrl: function () {
    return this.props.model.get('image');
  },
  render: function () {
    return (
      <div className="snap-thumb">
        <img width="200" src={this.getImgUrl()} />
      </div>
    );
  },
});

module.exports = SnapThumbComponent;
