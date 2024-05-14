clsconst mongoose = require("mongoose");
const Formation = require("../Models/formation.model");

exports.createFromation = async (req, res, next) => {
    try {
        const { name, price, description, startDate, endDate, maxPlace, center, cours } = req.body;


        let test = await new Formation({
            name,
            price,
            description,
            startDate,
            endDate,
            maxPlace,
            center: new mongoose.Types.ObjectId(center),
            cours,
        }).save()


        // console.log('test', test);

        const formations = await Formation.find()
        // console.log('formations', formations);

        res.send({
            formations
        })
    } catch (error) {
        next(error)
    }
}

exports.getAllFormations = async (req, res, next) => {
    try {
        const formations = await Formation.find({}).populate({ path: "center" })

        res.send({ formations })
    } catch (error) {
        next(error)
    }
}