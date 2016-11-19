var React = require('react');

var SnapDetailComponent = React.createClass({
    getImgUrl: function () {
        return this.props.model.get('image');
    },
    render: function () {
        return (
            <div className="snap-detail">
                <img src={this.getImgUrl()} />
            </div>
        );
    }
});

module.exports = SnapDetailComponent;
