const axios = require("axios");
const express = require('express');

const router = express.Router();

const { get_ipv4, get_ipv6 } = require("../utils/iputils");

router.get("/", async (req, res) => {
    try {
        const iprange = await axios.get("https://www.gstatic.com/ipranges/goog.json");
        res.setHeader('Content-Type', 'text/plain');
        res.send(get_ipv4(iprange.data.prefixes) + get_ipv6(iprange.data.prefixes));
    } catch (error) {
        console.log(error);
        res.status(500).send("Error retrieving IP range data");
    }
});

module.exports = router;