const express = require("express")
const centerController = require("../Controller/center.controller")

const router = express.Router()

router.post("/create-center", centerController.createCenter)
router.post("/edit-center", centerController.editCenter)
router.post("/archive-center", centerController.archiveCenter)
router.get("/", centerController.getCenters)

module.exports = router