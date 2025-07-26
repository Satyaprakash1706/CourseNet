const mongoose = require('mongoose');
const admin = require('./routes/admin');

const UserSchema = new mongoose.Schema({
    'email' : {type : String, required : true, unique : true},
    'password' : {type : String, required : true},
    'firstName' : {type : String, required : true},
    'lastName' : String
});

const AdminSchema = new mongoose.Schema({
    'email' : {type : String, unique : true},
    'password' : String,
    'firstName' : String,
    'lastName' : String
});

const CourseSchema = new mongoose.Schema({
    'title' : String,
    'description': String,
    'price' : String,
    'imageURL' : String,
    'createrID' : {type : mongoose.Types.ObjectId, ref : 'AdminModel'}
});

const PurchaseSchema = new mongoose.Schema({
    'courseId' : {type : mongoose.Types.ObjectId, ref : 'CourseModel'},
    'purchaseId' : {type : mongoose.Types.ObjectId, ref: 'UserModel'}
});

const AdminModel = new mongoose.model('Admin', AdminSchema);
const UserModel = new mongoose.model('User', UserSchema);
const CourseModel = new mongoose.model('Course', CourseSchema);
const PurchasesModel = new mongoose.model('Purchases', PurchaseSchema);

module.exports = {
    AdminModel,
    UserModel,
    CourseModel,
    PurchasesModel
};
