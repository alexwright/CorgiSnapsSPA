var BaseView = require('./baseview'),
    Snaps = require('../collections/snaps'),
    SnapThumbView = require('./snap_thumb.js'),
    SnapListComponent = require('../components/snap_list.jsx')

var SnapListView = BaseView.extend({
        componentClass: SnapListComponent,
        getSnapThumbs: function () {
            return this.collection.map(function (model) {
                return new SnapThumbView({
                    model: model,
                });
            }, this);
        },
        getViewData: function () {
            console.log('SnapListView.getViewData(): ', this.getSnapThumbs());
            return {
                snaps: this.getSnapThumbs(),
            };
        },
    },
    {
        fromRoute: function (route, urlArgs) {
            if (typeof window !== 'undefined') {
                Snaps.fetch();
            }
            else {
                var data = [{"id":1,"image":"http://corgisnaps.com/media/IMG_9455_uXh7kG4.jpg"}];
            }
            var view = new SnapListView({
                collection: Snaps,
            });
            return view;
        },
    });

module.exports = SnapListView;
