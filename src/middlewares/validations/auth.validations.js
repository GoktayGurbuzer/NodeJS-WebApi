import joi from "joi"
import APIError from "../../utils/errors.js";

class authValidation {
    constructor() {}

    static register = async (req, res, next) => {
        try {
            await joi.object({
                name: joi.string().trim().min(3).max(100).required().messages({
                    "string.base" : "İsim Alanı Normal Metin Olmalıdır.",
                    "string.empty" : "İsim Alanı Boş Olamaz!",
                    "string.min" : "İsim Alanı En Az 3 Karakter Olmalıdır.",
                    "string.max" : "İsim Alanı En Fazla 100 Karakterden Oluşabilir.",
                    "string.required" : "İsim Alanı Zorunludur"
                }),
                lastName: joi.string().trim().min(3).max(100).required().messages({
                    "string.base" : "Soyisim Alanı Normal Metin Olmalıdır.",
                    "string.empty" : "Soyisim Alanı Boş Olamaz!",
                    "string.min" : "Soyisim Alanı En Az 3 Karakter Olmalıdır.",
                    "string.max" : "Soyisim Alanı En Fazla 100 Karakterden Oluşabilir.",
                    "string.required" : "Soyisim Alanı Zorunludur"
                }),
                email: joi.string().email().trim().min(3).required().messages({
                    "string.base" : "Email Alanı Normal Metin Olmalıdır.",
                    "string.empty" : "Email Alanı Boş Olamaz!",
                    "string.min" : "Email Alanı En Az 3 Karakter Olmalıdır.",
                    "string.email" : "Lütfen Geçerli Bir E-Posta Adresi Giriniz!",
                    "string.max" : "Email Alanı En Fazla 100 Karakterden Oluşabilir.",
                    "string.required" : "Email Alanı Zorunludur"
                }),
                password: joi.string().trim().min(6).max(36).required().messages({
                    "string.base" : "Şifre Alanı Normal Metin Olmalıdır.",
                    "string.empty" : "Email Alanı Boş Olamaz!",
                    "string.min" : "Şifre Alanı En Az 6 Karakter Olmalıdır.",
                    "string.max" : "Şifre Alanı En Fazla 36 Karakterden Oluşabilir.",
                    "string.required" : "Şifre Alanı Zorunludur"
                })
            }).validateAsync(req.body)
        } catch (error) {
            if (error.details && error?.details[0].message)
                throw new APIError(error.details[0].message, 400)
            else throw new APIError("Lütfen Validasyon Kullarına Uyun", 400)
        }
        // Bu bir ara katman olduğu için işlem bittikten sonra işlemlere devam etmeli.
        next()
    }
}

export default authValidation