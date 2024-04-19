import 'express-async-errors';
import dotenv from 'dotenv';
import express from 'express';
import './src/db/dbConnection.js';
import router from './src/routers/index.js';
import errorHandleMiddleware from './src/middlewares/errorHandle.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

//Middlewares Tanımlamaları
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.use('/api', router);

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!',
    })
})

// Hata Yakalama
app.use(errorHandleMiddleware)

app.listen(port, () => {
    console.log(`Server, ${port} portundan çalışıyor.`);
})