const axios = require("axios");

async function fetch_iprange() {
    try {
        const iprange = await axios.get("https://www.gstatic.com/ipranges/goog.json");
        return (iprange.data.prefixes);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

function  get_ipv4(json) {
    let output = "";
    for (const key in json)
        if (json[key].ipv4Prefix !== undefined)
            output += `${json[key].ipv4Prefix}\n`;
    return (output);
}
  
  function  get_ipv6(json) {
    let output = "";
    for (const key in json)
        if (json[key].ipv6Prefix !== undefined)
            output += `${json[key].ipv6Prefix}\n`;
    return (output);
}

module.exports = { fetch_iprange, get_ipv4, get_ipv6 };