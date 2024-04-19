import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log('Bağlantı Başarılı!');
    })
    .catch((err) => {
        console.log('Veritabanına Bağlanılamadı!!', err);
    })