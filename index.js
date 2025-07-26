const express = require('express');
const app = express();
const mongoose = require('mongoose');


require('dotenv').config();

const { userRouter } = require('./routes/user');
const { adminRouter } = require('./routes/admin');
const { courseRouter } = require('./routes/course');
 
app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter)
app.use('/api/v1/course', courseRouter);

async function main(){
    await mongoose.connect(process.env.DB_URL);
    app.listen(3000);
    console.log("Database is connected successfully.");
}

main()