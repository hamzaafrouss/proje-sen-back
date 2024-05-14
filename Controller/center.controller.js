const { default: mongoose } = require("mongoose");
const Center = require("../Models/center.model");

exports.createCenter = async (req, res, next) => {
    try {
        const { name, address } = req.body;

        await new Center({ name, address }).save()


        const centers = await Center.find()

        res.send({
            centers
        })
    } catch (error) {
        next(error)
    }
}

exports.editCenter = async (req, res, next) => {
    try {
        const { centerID, name, address } = req.body

        const center = await Center.findById(centerID)

        if (!center) {
            return next({ code: 400, message: "Center id is not exist" })
        }
    
        center.name = name;
        center.address = address

        await center.save()

        const centers = await Center.find()

        res.send({ centers })
    } catch (error) {
        next(error)
    }
}


exports.archiveCenter = async (req, res, next) => {
    try {
        const {centerID} = req.body;

        const center = await Center.findById(centerID)
        center.isArchived = true
        await center.save()

        const centers = await Center.find()

        res.send({ centers })
    } catch (error) {
        next(error)
    }
}

exports.getCenters = async (req, res, next) => {
    try {
        const centers = await Center.find({ isArchived: false });
        res.json({ centers });
    } catch (error) {
        next(error);
    }
};
