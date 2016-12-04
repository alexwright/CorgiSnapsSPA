var React = require('react');

var SnapList = require('./snap_list.jsx'),
    SnapModal = require('./snap_modal.jsx');

var AppComponent = React.createClass({
  getModal: function () {
    if (this.props.detailModel) {
      return React.createElement(SnapModal, {
        close: this.closeModal,
        model: this.props.detailModel,
      });
    }
  },
  closeModal: function () {
    console.log("Close Modal");
    if ("initialPage" in history.state) {
        this.props.router.navigate('/', {
            trigger: true,
            replace: true,
        });
    }
    else {
        history.back();
    }
  },
  getModalWrapper: function () {
    var modal = this.getModal();
    if (modal) {
      return (
        <div className="modal-wrapper" onClick={this.onWrapperClick}>
          {modal}
        </div>
      );
    }
  },
  onWrapperClick: function () {
    console.log("onWrapperClick: ", this, arguments);
    this.closeModal();
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
