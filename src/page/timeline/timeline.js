require('./timeline.css');
let data = require('./../../json/schedul.json');
let template = require("./timeline.ejs");
console.log(data)
document.body.innerHTML = template(data);