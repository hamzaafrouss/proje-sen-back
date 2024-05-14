require("dotenv").config()
const mongoose = require("mongoose")


const app = require("./app")

const PORT = process.env.PORT || 9900

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)

mongoose.connect(DB).then(con => {
    console.log("--Connection success--")
}).catch(e => {
    console.log(e)
})


const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

