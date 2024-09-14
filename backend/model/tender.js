const mongoose = require('mongoose')
const tenderSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            Required:true,
        },
        description:{
            type:String,
            Required:true,
        }, 
        startdate:{type: Date, required:true},
        endDate:{type: Date, required:true},
        BufferTime: {type:Number,default:0}
    },{timestamps:true}
)  

const tendermodel = mongoose.model('tenders',tenderSchema)
module.exports = tendermodel