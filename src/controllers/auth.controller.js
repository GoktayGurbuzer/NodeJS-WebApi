import user from '../models/user.model.js';
import bcrypt from 'bcrypt';
import APIError from "../utils/errors.js";
import Response from "../utils/response.js";

export const login = async (req, res) => {
    console.log(req.body);
    return res.json(req.body);
}

export const register = async (req, res) => {
    const {email, password} = req.body;
    const userCheck = await user.findOne({ email });

    if (userCheck) {
        throw new APIError("Girmiş Olduğunuz Email Kullanımda!", 401);
    }
    req.body.password = await bcrypt.hash(password, 10);

    const userSave = new user(req.body);
    await userSave.save()
        .then((data) => {
            return new Response(data, 'Kayıt Başarıyla Eklendi').created(res)
        })
        .catch((err) => {
            return new Response(data).error400(res)
        })
}


