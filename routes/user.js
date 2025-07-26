const {Router} = require('express');
const userRouter = Router();

userRouter.post('/signup', (req, res)=>{
    res.json({
        'msg' : 'Account created successfully.'
    })
});

userRouter.post('/signin', (req,res)=>{
    res.json({
        'msg' : 'Logged in Successfully',
    })
});

userRouter.get('/purchases', (req,res)=>{
    res.json({
        'courses' : ''
    })
});


module.exports = {
    userRouter : userRouter,
}