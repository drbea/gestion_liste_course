import mongoose from "mongoose";

const article = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: Number,
}, {timestamps:true})

const Article = mongoose.model("Article", article);

export default Article;