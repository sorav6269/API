const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            Required:true,
        },
        email: {
            type:String,
            Required:true,
        },
},{timestamps:true}
)

const studentmodel = mongoose.model('student',studentSchema)
module.exports = studentmodel