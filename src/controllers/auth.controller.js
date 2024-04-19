import user from '../models/user.model.js';
import bcrypt from 'bcrypt';
import APIError from "../utils/errors.js";

export const login = async (req, res) => {
    console.log(req.body);
    return res.json(req.body);
}

export const register = async (req, res) => {
    const { email, password } = req.body;
    const userCheck = await user.findOne({ email });

    if (userCheck) {
        throw new APIError("Girmiş Olduğunuz Email Kullanımda !", 401);
    }
    req.body.password = await bcrypt.hash(password, 10);

    try {
        const userSave = new user(req.body);
        await userSave.save()
            .then((response) => {
                return res.status(201).json({
                    success: true,
                    data: response,
                    message: `${req.body.name} Kaydı Başarıyla Gerçekleşti.`
                })
            })
            .catch((err) => {
                throw new APIError("Girmiş Olduğunuz Email Kullanımda !", 400);
            });
    } catch (error) {
        throw new APIError("İçeriğe Ulaşılamıyor!", 404);
    }
}


