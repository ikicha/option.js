"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Option = (function () {
    function Option() {
    }
    Option.option = function (data) {
        if (data) {
            return new Some(data);
        }
        else {
            return new Empty();
        }
    };
    Option.empty = function () {
        return new Empty();
    };
    return Option;
}());
var Empty = (function (_super) {
    __extends(Empty, _super);
    function Empty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Empty.prototype.get = function () {
        return undefined;
    };
    Empty.prototype.exists = function () {
        return false;
    };
    Empty.prototype.ifExists = function (f) {
    };
    Empty.prototype.orElse = function (elseValue) {
        return elseValue;
    };
    return Empty;
}(Option));
var Some = (function (_super) {
    __extends(Some, _super);
    function Some(input) {
        var _this = _super.call(this) || this;
        _this.data = undefined;
        _this.data = input;
        return _this;
    }
    Some.prototype.get = function () {
        return this.data;
    };
    Some.prototype.exists = function () {
        return true;
    };
    Some.prototype.ifExists = function (f) {
        f(this.data);
    };
    Some.prototype.orElse = function (elseValue) {
        return this.data;
    };
    return Some;
}(Option));
exports.default = Option;
//# sourceMappingURL=option.js.map