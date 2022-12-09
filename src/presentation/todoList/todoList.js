"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var node_path_1 = require("node:path");
var readline = require("node:readline/promises");
var node_process_1 = require("node:process");
var ToDoList = /** @class */ (function () {
    function ToDoList(op, createTable, addtask, getalltaks, deletetask) {
        this.createTable = createTable;
        this.options = op;
        this.addTask = addtask;
        this.getAllTaks = getalltaks;
        this.deleteTask = deletetask;
        this.path = (0, node_path_1.resolve)('src', 'database', 'database.json');
        this.rl = readline.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
    }
    ToDoList.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, statusCode, body, task, taskId, deleteMoreTasks, taskId_1, allTasks, exit, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 19, , 20]);
                        console.log('----------------------------------');
                        console.log('Bem-Vindo a sua Lista de Tarefas');
                        console.log('----------------------------------');
                        console.log('');
                        _b.label = 1;
                    case 1:
                        if (!true) return [3 /*break*/, 18];
                        return [4 /*yield*/, this.options.op()];
                    case 2:
                        _a = _b.sent(), statusCode = _a.statusCode, body = _a.body;
                        if (statusCode === 400) {
                            console.log(body);
                            return [3 /*break*/, 1];
                        }
                        if (!(body === 1)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.rl.question('Qual tarefa quer adicionar no dia de hoje ?\n-> ')];
                    case 3:
                        task = _b.sent();
                        return [4 /*yield*/, this.addTask.addTask(task, this.path)];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 1];
                    case 5:
                        if (!(body === 2)) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.rl.question('Qual é o ID da tarefa que deseja remover ?\n-> ')];
                    case 6:
                        taskId = _b.sent();
                        return [4 /*yield*/, this.deleteTask["delete"](this.path, Number(taskId))];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8:
                        if (!true) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.rl.question("Deseja remover mais tarefas ?\n            1 - Sim\n            2 - N\u00E3o\n-> ")];
                    case 9:
                        deleteMoreTasks = _b.sent();
                        if (Number(deleteMoreTasks) === 2)
                            return [3 /*break*/, 12];
                        return [4 /*yield*/, this.rl.question('Qual é o ID da tarefa que deseja remover ?\n-> ')];
                    case 10:
                        taskId_1 = _b.sent();
                        return [4 /*yield*/, this.deleteTask["delete"](this.path, Number(taskId_1))];
                    case 11:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 12: return [3 /*break*/, 1];
                    case 13:
                        if (!(body === 3)) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.getAllTaks.get(this.path)];
                    case 14:
                        allTasks = _b.sent();
                        this.createTable.create(allTasks);
                        return [3 /*break*/, 16];
                    case 15:
                        console.log('error');
                        _b.label = 16;
                    case 16: return [4 /*yield*/, this.rl.question("Deseja sair da sua lista ?\n        1 - Sim\n        2 - N\u00E3o\n-> ")];
                    case 17:
                        exit = _b.sent();
                        if (Number(exit) === 1)
                            return [3 /*break*/, 18];
                        return [3 /*break*/, 1];
                    case 18:
                        console.log('Programa encerrado');
                        this.rl.close();
                        return [3 /*break*/, 20];
                    case 19:
                        error_1 = _b.sent();
                        console.log('Dados inesperados foram passados !');
                        return [3 /*break*/, 20];
                    case 20: return [2 /*return*/];
                }
            });
        });
    };
    return ToDoList;
}());
exports["default"] = ToDoList;
