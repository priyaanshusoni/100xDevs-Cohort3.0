const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId

const UserSchema = new Schema({
    id : {type: ObjectId},
    email : {type : String , unique : true},
    password : {type : String },
    firstName : {type : String },
    lastName : {type : String}
})
const AdminSchema = new Schema({
    id : {type: ObjectId},
    email : {type : String , unique : true},
    password : {type : String },
    firstName : {type : String },
    lastName : {type : String}
})

const CourseSchema = new Schema(
    {
        
       
        title : {type : String },
        description : {type : String },
        price : {type : Number},
        imageURL : {type : String},
        creatorId : {type : ObjectId}
    })
const purchaseSchema = new Schema(
    {
        
        id : {type : ObjectId},
        courseId : {type : ObjectId},
        userId  : {type : ObjectId},

       
    })

    const UserModel = mongoose.model("User" , UserSchema);
    const CourseModel = mongoose.model("Course" , CourseSchema);
    const PurchaseModel = mongoose.model("Purchase" ,purchaseSchema);
    const adminModel = mongoose.model("admin" , AdminSchema);
        

    module.exports = {
        UserModel , 
        CourseModel ,
        PurchaseModel,
        adminModel
    }
    
