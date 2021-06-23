import mongoose from "mongoose";
const titokSchema=mongoose.Schema({
    imgsrc:String,
    channel:String,
    desc:String,
    song:String,
    likes:String,
    comment:String,
    share:String,


})

export default mongoose.model('titokVideos',titokSchema);