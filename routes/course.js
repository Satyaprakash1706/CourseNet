const {Router} = require('express');
const courseRouter = Router();

courseRouter.post('/purchase', (req,res)=>{
    res.json({
        'msg' : 'Purchased course successfully'
    })
})


courseRouter.get('/preview', (req,res)=>{
    res.json({
        'All courses' : ''
    })
});

module.exports = {
    courseRouter: courseRouter,
}