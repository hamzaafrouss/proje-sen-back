const express = require("express")
const formationController = require("../Controller/formation.controller")

const router = express.Router()

router.post("/create-formation", formationController.createFromation)
router.get("/", formationController.getAllFormations)

module.exports = router