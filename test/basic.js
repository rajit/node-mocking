'use strict';

describe('MocKing', function () {
    var MocKing = require('../index.js');
    it('should create a mock that can handle any method', function () {
        var mock = MocKing().mock;
        mock.asdf();
        mock.hey();
        mock.qwer();
    });
});
