import { Router } from 'express';

const UserController = require('../controller/user.controller');

const router = Router();

router.post('/registration', UserController.register);

export default router;