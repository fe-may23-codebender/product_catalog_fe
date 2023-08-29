"use strict";
exports.__esModule = true;
exports.Cart = void 0;
var react_1 = require("react");
var container_module_scss_1 = require("../../styles/utils/container.module.scss");
var Cart_module_scss_1 = require("./Cart.module.scss");
exports.Cart = function () {
    return (react_1["default"].createElement("div", { className: container_module_scss_1["default"].limit + " " + Cart_module_scss_1["default"].Container },
        react_1["default"].createElement("p", { className: Cart_module_scss_1["default"].Container__Top }, "Back"),
        react_1["default"].createElement("h1", { className: Cart_module_scss_1["default"].Container__Text }, "Cart"),
        react_1["default"].createElement("div", { className: Cart_module_scss_1["default"].Container__Content },
            react_1["default"].createElement("div", { className: Cart_module_scss_1["default"].TotalContainer },
                react_1["default"].createElement("div", { className: Cart_module_scss_1["default"].TotalContainer__Price },
                    react_1["default"].createElement("h2", null, "$2657"),
                    react_1["default"].createElement("p", null, "Total for 3 items")),
                react_1["default"].createElement("div", { className: Cart_module_scss_1["default"].TotalContainer__Button }, "Checkout")),
            react_1["default"].createElement("div", { className: Cart_module_scss_1["default"].ItemContainer },
                react_1["default"].createElement("div", { className: Cart_module_scss_1["default"].ItemContainer__CartItem }, "Item"),
                react_1["default"].createElement("div", { className: Cart_module_scss_1["default"].ItemContainer__CartItem }, "Item"),
                react_1["default"].createElement("div", { className: Cart_module_scss_1["default"].ItemContainer__CartItem }, "Item")))));
};
