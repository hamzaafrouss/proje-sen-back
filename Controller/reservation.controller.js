const mongoose = require("mongoose");
const Reservation = require("../Models/reservation.model");

exports.createReservation = async (req, res, next) => {
    try {
        const { name, lastname, email, phone, formation } = req.body.formData;

        const newReservation = await new Reservation({
            name,
            lastname,
            email,
            phone,
            formation: formation ? new mongoose.Types.ObjectId(formation) : undefined
        }).save()

        res.send({
            newReservation
        })
    } catch (error) {
        next(error)
    }
}
exports.deleteReservation = async (req, res, next) => {
    try {
        const { reservationId } = req.body;

        await Reservation.findByIdAndDelete(reservationId)

        res.json({ reservationId });
    } catch (error) {
        next(error)
    }
}

exports.editReservation = async (req, res, next) => {
    try {
        const { id, name, lastname, email, phone, formation } = req.body.formData

        const reservation = await Reservation.findById(id)
        console.log(reservation)

        if (!reservation) {
            return next({ code: 400, message: "fonrmation id is not exist" })
        }

        reservation.name = name;
        reservation.lastname = lastname;
        reservation.email = email;
        reservation.phone = phone;
        reservation.formation = new mongoose.Types.ObjectId(formation)


        const newReservation = await reservation.save()
        await newReservation.populate('formation')



        res.send({ newReservation })
    } catch (error) {
        next(error)
    }
}


exports.archiveReservation = async (req, res, next) => {
    try {
        const { reservationID } = req.body;

        const reservation = await Reservation.findById(reservationID)
        reservation.isArchived = true
        await reservation.save()

        const reservations = await Reservation.find()

        res.send({ reservations })
    } catch (error) {
        next(error)
    }
}

exports.getReservations = async (req, res, next) => {
    try {
        const reservations = await Reservation.find({ isArchived: false }).populate([{ path: "formation" }]);
        res.json({ reservations });
    } catch (error) {
        next(error);
    }
};
