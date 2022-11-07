const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')

dotenv.config()

const indexRouter = require('./routes/index');
const errorRouter = require('./routes/Error');
const categoryRouter = require('./routes/category');
const authRouter = require('./routes/auth');
const checkToken = require('./middleware/checkToken');

const app = express();

try{
    mongoose.connect(process.env.DBURL)
}catch(e){
    console.log(e.message);
}

app.use(logger('dev'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use(checkToken)
app.use('/category', categoryRouter);
app.use('*', errorRouter);

let PORT = process.env.PORT || 5000

app.listen(PORT)
