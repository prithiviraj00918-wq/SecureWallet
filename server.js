const express = require("express");
const cors = require("cors");
const { ethers } = require("ethers");

const app = express();
app.use(cors());
app.use(express.json());

const nonces = {}; // store nonce per wallet

// Generate nonce
app.post("/nonce", (req, res) => {
    const { address } = req.body;
    const nonce = Math.floor(Math.random() * 1000000);
    nonces[address] = nonce;

    res.json({ nonce });
});

// Verify signature
app.post("/verify", (req, res) => {
    const { address, signature } = req.body;
    const nonce = nonces[address];

    const message = `Login nonce: ${nonce}`;
    const recoveredAddress = ethers.verifyMessage(message, signature);

    if (recoveredAddress.toLowerCase() === address.toLowerCase()) {
        res.json({ success: true, message: "Login successful" });
    } else {
        res.json({ success: false, message: "Invalid signature" });
    }
});

app.listen(3000, () => {
    console.log("Backend running on http://localhost:3000");
});