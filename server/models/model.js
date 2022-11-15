const mongoose = require('mongoose');
const PirateSchema  = new mongoose.Schema({
    name: {
        type: String,
        minLength: [3, "Name must be 3 char long or more"]
    },
    image: {
        type: String,
        minLength: [3, "Url must be atleast 3 char long"]
    },
    chests: {
        type: Number,
        min: [1, "Pirates must have atleast 1 chest matey. Arrr"]
    },
    phrase: {
        type: String,
        min: [3, "Phrases must be more than 3 char for this crew you scallywag."]
    },
    eyepatch: {
        type: Boolean,
        default: false
    },
    hookhand: {
        type: Boolean,
        default: false
    },
    pegleg: {
        type: Boolean,
        default: false //setting default value to false 
    },
    position: {
        type: String,
        required: [true, "Pick yer position matey."]
    }

}, {timestamps: true});

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;