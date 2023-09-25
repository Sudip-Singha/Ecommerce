const express = require('express');
const { resolve } = require('path');
const env = require("dotenv").config({ path: "../.env" });
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.get('/',(req,res) =>{
    res.send(`${process.env.STATIC_DIR}/index.html`);
}) 

const DOMAIN = "https://shopverseproject.netlify.app";

app.post("/checkout", async (req, res) => {
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: `${DOMAIN}/success`,
        cancel_url:  `${DOMAIN}/cancel`
    });

    res.send(JSON.stringify({
        url: session.url
    }));

})

app.listen(4000, () => {
    console.log("listning on port 4000");
})