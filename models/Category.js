import mongoose from "mongoose";

const cateSchema = new mongoose.Schema({
    categoryName:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Category = mongoose.model("Category",cateSchema)
export default Category