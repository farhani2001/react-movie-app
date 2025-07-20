const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({ "users": ["userone", "usertwo", "userthree"] })
})

app.listen(5000, () => {console.log("listening port 5000")})
