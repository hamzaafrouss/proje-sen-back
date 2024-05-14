const mongoose = require("mongoose")

const CenterSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name require"]
    },
    address: {
        type: String,
        required: [true, "Address require"]

    },
    isArchived: {
        type: Boolean,
        default: false,
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
}, {
    toJson: { virtuals: true },
    toObject: { virtuals: true }
})

const Center = mongoose.model("Center", CenterSchema)

module.exports = Center