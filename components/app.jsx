var React = require('react');

var SnapList = require('./snap_list.jsx'),
    SnapModal = require('./snap_modal.jsx');

var AppComponent = React.createClass({
  getModal: function () {
    if (this.props.detailModel) {
      return React.createElement(SnapModal, {
        model: this.props.detailModel,
      });
    }
  },
  getModalWrapper: function () {
    var modal = this.getModal();
    if (modal) {
      return (
        <div className="modal-wrapper">
          {modal}
        </div>
      );
    }
  },
  render: function () {
    return (
      <div className="corgi-snap-app-main">
        <SnapList collection={this.props.collection} />
        {this.getModalWrapper()}
      </div>
    );
  },
});

module.exports = AppComponent;
