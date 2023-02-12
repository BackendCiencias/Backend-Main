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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSecretary = exports.registerSecretary = void 0;
const jwt_handle_1 = require("./../utils/jwt.handle");
const secretary_model_1 = __importDefault(require("../models/secretary.model"));
const registerSecretary = (secretary) => __awaiter(void 0, void 0, void 0, function* () {
    // const checkIs = await Secretary.findOne({email: secretary.email})
    // if(checkIs) return "ALREADY_USER";
    const createdSecretary = yield secretary_model_1.default.create(secretary);
    createdSecretary.password = yield createdSecretary.encryptPassword(createdSecretary.password);
    const savedSecretary = yield createdSecretary.save();
    return savedSecretary;
});
exports.registerSecretary = registerSecretary;
const loginSecretary = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const secretary = yield secretary_model_1.default.findOne({ email });
    if (!secretary)
        return "EMAIL_INCORRECT";
    const isCorrect = yield secretary.validatePassword(password); //validate free?
    if (!isCorrect)
        return "PASSWORD_INCORRECT";
    const data = { email: secretary.email, names: secretary.names, _id: secretary._id };
    const token = (0, jwt_handle_1.generateToken)(secretary.id);
    return {
        token,
        data
    };
});
exports.loginSecretary = loginSecretary;
//# sourceMappingURL=secretary.services.js.map