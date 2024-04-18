import mongoose from 'mongoose';

// User tablomuz için sütunlarımızı oluşturuyoruz. Önce sütun ismi, sonrasında ise sütunun özelliklerini belirliyoruz.
const userShema = new mongoose.Schema({
    name : { type: String, required: true, trim: true },
    lastName : { type: String, required: true, trim: true },
    email : { type: String, required: true, trim: true, unique : true, lowercase: true },
    password: { type: String, required: true, trim: true },
    role: { type: String, default: 'user' },
    createDate: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: false },
},{
    collection: 'users',
    timestamps: true
})

// Kullanıcı modelimizi oluşturuyoruz.
const user = mongoose.model('Users', userShema);

// Modülümüzü dışarıya açıyoruz.
module.exports = user;