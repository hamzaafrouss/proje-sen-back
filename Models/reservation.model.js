const mongoose = require("mongoose")

const ReservationSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name require"]
    },
    lastname: {
        type: String,
        required: [true, "lastname require"]

    },
    email: {
        type: String,
        required: [true, "email require"]

    },
    phone: {
        type: Number,
        required: [true, "phone require"]

    },
    isArchived: {
        type: Boolean,
        default: false,
    },
    formation: {
        type: mongoose.Types.ObjectId,
        ref: "Formation"
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
}, {
    toJson: { virtuals: true },
    toObject: { virtuals: true }
})

const Reservation = mongoose.model("Reservation", ReservationSchema)

module.exports = Reservation