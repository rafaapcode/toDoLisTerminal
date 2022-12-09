"use strict";
exports.__esModule = true;
var makeTodo_1 = require("./helper/makeTodo");
var todolist = (0, makeTodo_1["default"])();
todolist.execute()
    .then(function (r) {
    console.log(r);
})["catch"](function (err) { return console.error(err); });
