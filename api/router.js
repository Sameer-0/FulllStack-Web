const express = require("express");

function setRouter(app) {
    const authRoute = require("./app/routes/auth.js")
    const productRoute = require("./app/routes/products.js")
    const userRouter = require("./app/routes/user.js")
    app.use('/api/auth', authRoute)
    app.use('/api/user', userRouter)
    app.use('/api/product', productRoute)

}

module.exports = setRouter  