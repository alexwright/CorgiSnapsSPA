var Backbone = require('backbone');

var Snap = Backbone.Model.extend({
  getDetailUrl: function () {
    return '/snap/' + this.get('id');
  },
});

module.exports = Snap;
