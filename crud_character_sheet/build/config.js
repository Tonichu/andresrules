"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionData = exports.db = exports.PORT = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const PORT = 3000;
exports.PORT = PORT;
const connectionData = {
    host: "localhost",
    user: "root",
    password: "1234",
    database: "xa_points"
};
exports.connectionData = connectionData;
const db = mysql2_1.default.createConnection(connectionData);
exports.db = db;
