
const mongoose = require("mongoose")




const Schema = mongoose.Schema // C++ class js class
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
    id : {type : ObjectId , unique: true},
    email : {type : String},
   password : {type : String},
   firstName : {type : String},
   lastName : {type : String},

})
const CourseSchema = new Schema({
    id : {type : ObjectId},
   title : {type : String},
   description : {type : String},
   price : {type : Number},
   imageURL : {type : String},
   creatorId : {type : ObjectId},


})
const adminSchema = new Schema({
    id : {type : ObjectId},
    email : {type : String , unique : true},
   password : {type : String},
   firstName : {type : String},
   lastName : {type : String},

})
const purchaseSchema = new Schema({
    id : {type : ObjectId},
   courseId : {type : ObjectId},
   userId  : {type : ObjectId},

})

const UserModel = mongoose.model("User",UserSchema); 
const CourseModel = mongoose.model("Course",CourseSchema);
const AdminModel = mongoose.model("Admin",adminSchema); 
const PurchaseModel = mongoose.model("Purchase",purchaseSchema);



module.exports= {
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}