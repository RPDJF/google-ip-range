const express = require("express");
const fs = require("fs");

const { fetch_iprange, get_ipv4, get_ipv6 } = require("./utils/iputils");

const app = express();

const defaultRoutes = require("./routes/default");
const ipv4Routes = require("./routes/ipv4");
const ipv6Routes = require("./routes/ipv6");

app.get("/", defaultRoutes);
app.get("/ipv4", ipv4Routes);
app.get("/ipv6", ipv6Routes);

if (process.argv[2] === "fetch") {
    console.log("Fetching data...");
    try {
        fetch_iprange().then(iprange =>{
            const ipv4 = get_ipv4(iprange);
            const ipv6 = get_ipv6(iprange);
        
            fs.writeFile("../google-ip-range.txt", ipv4 + ipv6, err => {
                if (err) console.log(err);
            });
            fs.writeFile("../google-ip-range-ipv4.txt", ipv4, err => {
                if (err) console.log(err);
            });
            fs.writeFile("../google-ip-range-ipv6.txt", ipv6, err => {
                if (err) console.log(err);
            });
        }).catch(error => {
            console.log(error);
        });
    } catch (error) {
        console.log(error);
    }
} else {
    try {
        app.listen(8080, () => {
            console.log("Server is running on port 8080");
        });
    } catch (error) {
        console.log(error);
    }
}