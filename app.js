import express from 'express';
import dotenv from 'dotenv';
import './src/db/dbConnection.js'
dotenv.config();
const app = express();

const port = process.env.PORT || 5001;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!',
    })
})

app.listen(port, () => {
    console.log(`Server, ${port} portundan çalışıyor...`);
})