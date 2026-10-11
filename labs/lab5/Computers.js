const express = require("express")

const router = express.Router()

router.route("/game-dev")
    .get((req, res) => {
        res.send("GET - /books/computers/game-dev")
    })
router.route("/java")
    .get((req, res) => {
        res.send("GET - /books/computers/java")
    })
router.route("/python")
    .get((req, res) => {
        res.send("GET - /books/computers/python")
    })


module.exports = router