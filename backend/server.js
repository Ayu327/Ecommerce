const express = require("express");
//const { YOUR_SECRET_KEY } = require('./secret')
const app = express()

const stripe = require('stripe')(YOUR_SECRET_KEY)

app.use(express.json())

app.use((req,res,next) =>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","*")
    res.header("Access-Control-Request-Method","*")

    next()
})

app.get('./secret/:amt', async(req,res) =>{
    const paymentIntent = await stripe.paymentIntents.create({
        currency: 'inr',
        amount: req.params.amt * 100, 
        automatic_payment_method: {enabled: true}
    })
    const intent = paymentIntent
    res.status(200).send({client_secret: intent.client_secret})
})

app.listen(8080, () =>{
    console.log("Running on port 8080")
})