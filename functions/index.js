const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");
const stripe = require("stripe")(functions.config().stripe.secret_key);

// Config
const app = express();

// Middlewares
app.use(cors({
  origin: true
}));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.status(200).send("Hey the API works");
});

app.post('/payments/create', async (req, res) => {
  const { total } = req.query;
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'eur'
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret
  })
});

// Listener
exports.api = functions.https.onRequest(app);