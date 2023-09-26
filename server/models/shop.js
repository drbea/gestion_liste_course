import mongoose from "mongoose";

const userShop = mongoose.Schema({
    name: {
        type: "string",
        require: true,
        unique: true,
    },
    nbArticle: {
        type: "number",
        default: 0,
    },
}, {timestamps:true} )

const shop = mongoose.model("userStore", userShop);
export default shop

