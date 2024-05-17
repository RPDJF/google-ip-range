const express = require('express');

const router = express.Router();

const { fetch_iprange, get_ipv6 } = require("../utils/iputils");

router.get("/ipv6", async (req, res) => {
    try {
        const iprange = await fetch_iprange();
        res.setHeader('Content-Type', 'text/plain');
        res.send(get_ipv6(iprange));
    } catch (error) {
        console.log(error);
        res.status(500).send("Error retrieving IP range data");
    }
});

module.exports = router;