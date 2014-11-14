'use strict';

var MocKing = function () {
    if (this instanceof MocKing) {
        this.mock = this.create();
        this.calls = {};
    } else {
        var mocker = new MocKing();
        return {
            mocker: mocker,
            mock: mocker.mock
        };
    }
};

MocKing.prototype.create = function () {
    return Proxy.create({
        get: this.handler.bind(this)
    });
};

MocKing.prototype.handler = function (proxy, name) {
    var self = this;
    return function () {
        self.addCall(name, arguments);
    };
};

MocKing.prototype.addCall = function (name, args) {
    if (!this.calls[name]) {
        this.calls[name] = [];
    }

    this.calls[name].push(args);
};

module.exports = MocKing;
