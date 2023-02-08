"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("../libs/verifyToken");
const router = (0, express_1.Router)();
const auth_controller_1 = require("../controllers/auth.controller");
router.post('/api/auth/secretary/signup', auth_controller_1.signup);
router.post('/api/auth/secretary/signin', auth_controller_1.signin);
router.get('/api/auth/secretary/profile', verifyToken_1.TokenValidation, auth_controller_1.profile);
exports.default = router;
//# sourceMappingURL=auth.js.map