import mongoose from 'mongoose';
import dotenv from 'dotenv';

mongoose.connect('mongodb://localhost:27017/nodejswebapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Bağlantı Başarılı!');
    })
    .catch((err) => {
        console.log('Veritabanına Bağlanılamadı!!', err);
    })