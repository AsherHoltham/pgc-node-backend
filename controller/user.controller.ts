import { Request, Response, NextFunction } from 'express';

const UserService = require('../services/user.services').default;

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password }: { email: string; password: string } = req.body;

        const successRes = await UserService.registerUser(email, password);

        res.json({ status: true, success: "User Registered \u2705" })
    }
    catch (err) {
        throw err;
    }
}