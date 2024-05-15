const axios = require("axios");

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

module.exports = { get_ipv4, get_ipv6 };