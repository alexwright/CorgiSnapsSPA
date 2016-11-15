var Backbone = require('backbone'),
    React = require('react'),
    ReactDom = require('react-dom');

var BaseView = Backbone.View.extend({
  _ensureElement: function () {
    if (typeof window != 'undefined') {
      this.setElement(this._createElement('div'));
    }
  },
  _setElement: function (el) {
    this.el = el;
  },
  initialize: function () {
    if (this.model) {
      this.listenTo(this.model, 'change', function () {
        console.log("model-change event");
      });
    }
    else if (this.collection) {
      this.listenTo(this.collection, 'sync', function () {
        console.log("collection-change event");
        this.render();
      });
    }
  },
  getComponentClass: function () {
    if (!this.componentClass) {
      throw Error("No componentClass set");
    }
    return this.componentClass;
  },
  getViewData: function () {
    console.warn("placeholder getViewData() called");
  },
  _component: null,
  getComponent: function () {
    if (!this._component) {
      var componentClass = this.getComponentClass(),
          viewData = this.getViewData();
          if (!viewData.key) {
            if (viewData.id) {
              viewData.key = viewData.id;
            }
          }
      this._component = React.createElement(componentClass, viewData);
    }
    return this._component;
  },
  render: function () {
    // throw Error("oops");
    // ReactDom.render(this.getComponent(), this.el);
    this.getComponet().render();
    return this;
  },
});

module.exports = BaseView;
