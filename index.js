const json2csv = require("jsontocsvbuffer");
const data = [
  {
    "user.name.first": "Pratik",
    "user.name.last": "Kumar",
    "user.email": "pratik@squareboat.com",
    dob: "22-10-2003",
  },
];
const buffer = json2csv(data, { delimiter: "$" });
console.log(buffer);
