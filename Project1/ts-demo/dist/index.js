"use strict";
// 基础类型 number, string, boolean, undefined, null, void, any
var a = 123;
var b = '';
var c;
// 复杂类型 array
// var d: number[] = [1,2,3];
var d = [1, 2, 3];
var g = {
    id: 1000,
    name: '番茄',
    price: 3,
    isChecked: false,
    desc: ''
};
// 元祖
var e = [1000, ''];
// 枚举
var F;
(function (F) {
    F[F["up"] = 0] = "up";
    F[F["down"] = 1] = "down";
    F[F["left"] = 2] = "left";
    F[F["right"] = 3] = "right";
})(F || (F = {}));
var f = F.down;
// 函数类型
function func(a, b, c) {
}
var swap = function (a, b) {
    return [b, a];
};
// 泛型
function swapArray(tuple) {
    return [tuple[1], tuple[0]];
}
swapArray(['1', !!2]);
swapArray(['1', !!2]);
// 泛型约束
var cookies = {
    get: function () { },
    set: function () { },
    remove: function () { }
};
function pick(o, names) {
    return names.map(function (n) { return o[n]; });
}
pick(cookies, ['get', 'set']);
