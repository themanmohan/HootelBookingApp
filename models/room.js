const  mongoose  = require("mongoose");

const roomSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    maxcount:{
        type: Number,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    rentperday:{
        type: Number,
        required: true
    },
    imageUrl:[],
    currentbookings:[],
    type:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
},{
    timestamps:true
});


module.exports = roomModel = mongoose.model(`room`,roomSchema)