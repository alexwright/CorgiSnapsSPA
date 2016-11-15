var React = require('react');

var SnapThumbComponent = React.createClass({
  render: function () {
    return (
      <div className="snap-thumb">
        <img width="200" src={this.props.image} />
      </div>
    );
  },
});

module.exports = SnapThumbComponent;
