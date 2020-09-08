const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let VaccinationSchema = new Schema({
    
    name:{
        type:String,
        required:true,
    },

    description:{
        type: String,
        required: true
    },

    pathologies:{
        type:[String],
        required: false,
    },

    vaccode:{
        type:String,
        required:true,
    },

    dosage:{
        type: Number,
        required:true,
    }

}, {timestamps:true});

const Vaccination = mongoose.model('Vaccination', VaccinationSchema);
module.exports.Vaccination = Vaccination;