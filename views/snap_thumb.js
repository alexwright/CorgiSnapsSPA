var Backbone = require('backbone');

var SnapThumbComponent = require('../components/snap_thumb.jsx'),
    BaseView = require('./baseview');

var SnapThumbView = BaseView.extend({
    componentClass: SnapThumbComponent,
    getViewData: function () {
        return this.model.toJSON();
    },
});

module.exports = SnapThumbView;
