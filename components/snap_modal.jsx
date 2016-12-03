var React = require('react');

var SnapModal = React.createClass({
  classNames: function () {
    return [
      'snap-modal',
      'modal',
    ].join(' ');
  },
  render: function () {
    return (
      <div className={this.classNames()}>
        <div className="modal-image-wrapper">
          <img src={this.props.model.get('image')} />
        </div>
      </div>
    );
  },
});

module.exports = SnapModal;