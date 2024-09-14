const mongoose = require('mongoose');

const connectDb = () => {
    return mongoose.connect(process.env.liveUrl)
        .then(() => {
            console.log("connected successfully")
        }).catch((error) => {
            console.log(error)
        })
}

module.exports = connectDb;