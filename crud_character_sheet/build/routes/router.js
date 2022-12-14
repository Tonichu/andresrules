"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const insertStudent_js_1 = require("../handlers/student/insertStudent.js");
const getStudents_js_1 = require("../handlers/student/getStudents.js");
const getOneStudent_js_1 = require("../handlers/student/getOneStudent.js");
const deleteOneStudent_js_1 = require("../handlers/student/deleteOneStudent.js");
const getStudentProfile_js_1 = require("../handlers/student/getStudentProfile.js");
const updateOneStudent_js_1 = require("../handlers/student/updateOneStudent.js");
const patchOneStudent_js_1 = require("../handlers/student/patchOneStudent.js");
const showPoints_js_1 = require("../handlers/student/showPoints.js");
const router = express_1.default.Router();
exports.router = router;
router.get("/points", showPoints_js_1.showPoints);
router.get("/editStudentProfile", getStudentProfile_js_1.getStudentProfile);
router.post("/students", insertStudent_js_1.insertStudent);
router.get("/students", getStudents_js_1.getStudents);
router.get("/students/:id_student", getOneStudent_js_1.getOneStudent);
//router.delete("/students", deleteStudent);
router.delete("/students/:id_student", deleteOneStudent_js_1.deleteStudent);
router.put("/students/:id_student", updateOneStudent_js_1.updateOneStudent);
router.patch("/students/:id_student", patchOneStudent_js_1.patchOneStudent);
