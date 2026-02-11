import {Router} from 'express';

import { register, login } from "../controllers/.authController.ts";

const router = Router();

@openapi
/**
 * @openapi
 * /register:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       
 */         

router.post('/register', register);
router.post('/login', login);

export default router;