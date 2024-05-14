const express = require("express")
const reservationController = require("../Controller/reservation.controller")

const router = express.Router()

router.post("/create-reservation", reservationController.createReservation)
router.post("/detele-reservation", reservationController.deleteReservation)
router.post("/edit-reservation", reservationController.editReservation)
router.post("/archive-reseravstion", reservationController.archiveReservation)
router.get("/", reservationController.getReservations)

module.exports = router