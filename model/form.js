const mongoose = require('mongoose');


const dformschema = mongoose.Schema({
    fname:
    {
        type:String,
        required:true
    },
    lname:
    {
        type:String,
        required:true
    },
    demail:
    {
        type:String,
        required:true
    },
    dpassword:
    {
        type:String,
        required:true
    },
    dgender:
    {
        type:String,
        required:true
    },
    dhobby:
    {
        type:Array,
        required:true
    },
    dphone:
    {
        type:Number,
        required:true
    },
    dcity:
    {
        type:String,
        required:true
    }
});

const dform = mongoose.model('dform',dformschema);

module.exports=dform;