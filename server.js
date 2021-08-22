import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './src/config/viewEngine';
import initWebRoutes from './src/routes/web';
require('dotenv').config();

//query param

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log('Start in port: ', port)
});
