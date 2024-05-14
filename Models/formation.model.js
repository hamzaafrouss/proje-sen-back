const mongoose = require("mongoose")

const FormationSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name require"]
    },
    price: {
        type: String,
        required: [true, "Prix require"]

    },
    description: {
        type: String,
        required: [true, "Descriptin require"]
    },
    startDate: {
        type: Date,
        require: [true, "startDate require"]
    },
    endDate: {
        type: Date,
        require: [true, "endDate require"]
    },
    maxPlace: {
        type: Number,
        require: [true, "maxPlace require"]
    },
    totalinscrption: {
        type: Number,
        default: 0
    },
    center: {
        type: mongoose.Schema.ObjectId,
        ref: "Center",
        required: [true, "center is require"]
    },
    ratingsAvg: {
        type: Number,
        default: 4.5
    },
    totalRatings: {
        type: Number,
        default: 0
    },
    cours: {
        type: [String],
        required: [true, "Provide one cour at least"]
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    totalFormation : {
        type : Number,
        default : 0
    }
}, {
    toJson: { virtuals: true },
    toObject: { virtuals: true }
})

const Formation = mongoose.model("Formation", FormationSchema)

module.exports = Formation