const mongoose = require("mongoose")

const dbconnection = () => {
    mongoose.connect("mongodb://localhost/hotelbooking", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log(`DB connected`)
    })
}
module.exports = dbconnection