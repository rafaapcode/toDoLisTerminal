"use strict";
exports.__esModule = true;
var TableCreate = /** @class */ (function () {
    function TableCreate() {
    }
    TableCreate.prototype.create = function (tasks) {
        console.table(tasks);
        return { tasksQuantities: tasks.length };
    };
    return TableCreate;
}());
exports["default"] = TableCreate;
