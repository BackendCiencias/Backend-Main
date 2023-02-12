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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudent = void 0;
const student_services_1 = require("./../services/student.services");
const error_handle_1 = require("../utils/error.handle");
const createStudent = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseStudent = yield (0, student_services_1.registerStudent)(body);
        res.send(responseStudent);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_SIGNUP_STUDENT', e);
    }
});
exports.createStudent = createStudent;
//# sourceMappingURL=student.controller.js.map