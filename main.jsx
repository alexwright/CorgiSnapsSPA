"use strict";
var Backbone = require('backbone'),
    React = require('react');

var Foo = React.createClass({
    render: function () {
        return (
            <span>Bar?</span>
        );
    },
});

var Main = Backbone.View.extend({
    _ensureElement: function () {
        // No Op
    },
    render: function () {
        return (
            <div>
                <Foo />
                Main!
            </div>
        );
    },
});

module.exports = Main;
