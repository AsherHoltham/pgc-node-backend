const userModel = require('../model/user.model').default;

class UserService {
    static async registerUser(email: String, password: String) {
        try {
            const createUser = new userModel({ email, password });
            return await createUser.save();
        }
        catch (err) {
            throw err;
        }
    }
}

export default UserService;