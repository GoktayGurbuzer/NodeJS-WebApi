import { Router } from 'express';
import { login, register } from '../controllers/auth.controller.js';
import authValidator from '../middlewares/validations/auth.validations.js';

const router = Router();
router.post("/login", login)
router.post("/register", authValidator.register, register)

console.log("Rota Çalışıyor")

export default router;