const express = require("express");

const app = express();

const defaultRoutes = require("./routes/default");
const ipv4Routes = require("./routes/ipv4");
const ipv6Routes = require("./routes/ipv6");

app.get("/", defaultRoutes);
app.get("/ipv4", ipv4Routes);
app.get("/ipv6", ipv6Routes);


app.listen(8080, () => {
    console.log("Server is running on port 8080");
});