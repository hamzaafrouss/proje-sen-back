const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require('cors');

// Use CORS middleware
const centerRoutes = require("./Routes/center.routes")
const formationRoutes =require("./Routes/formation.routes")
const reservationRoutes =require("./Routes/reservation.routes")

const app = express()

app.use(cors());
app.use(helmet())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))  // log every request to the console
}

app.use(express.json({ limit: "10kb" }))


app.use(express.static(`${__dirname}/public`))


app.use("/api/centers", centerRoutes)
app.use("/api/formations",formationRoutes)
app.use("/api/reservations", reservationRoutes)


// app.all("*", (req, res, next) => {

// })

module.exports = app