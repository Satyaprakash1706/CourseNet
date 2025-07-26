const adminRouter = require('express').Router();
const {AdminModel} = require('../db');

adminRouter.post('/signup', (req, res)=>{
    const {email, password, firstName, lastName} = req.body;
    AdminModel.create({
        email,
        password,
        firstName,
        lastName
    }).then(()=>{
        res.json({
        'msg' : 'Account created successfully.'
    })
    });
    res.json({
        'msg' : 'Email already exists.'
    })
});

adminRouter.post('/signin', (req,res)=>{
    res.json({
        'msg' : 'Logged in Successfully',
    })
});

adminRouter.put('/course/delete', (req,res)=>{
    res.json({
        'msg' : 'Course is deleted successfully.'
    })
});

adminRouter.post('/course',(req,res)=>{
    res.json({
        'msg' : 'Course created successfully',
    })
})

module.exports = {
    adminRouter : adminRouter
}