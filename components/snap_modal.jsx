var React = require('react');

var SnapModal = React.createClass({
  classNames: function () {
    return [
      'snap-modal',
      'modal',
    ].join(' ');
  },
  onCloseClick: function () {
  },
  render: function () {
    return (
      <div className={this.classNames()}>
        <div className="modal-image-wrapper">
          <img src={this.props.model.get('large')} />
        </div>
      </div>
    );
  },
});

module.exports = SnapModal;
