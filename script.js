const path = require("path");

const fs = require("fs");

// console.log(path.join(__filename, "api", "script.js"));

const user = "Rohan";

// fs.writeFile(
//   path.join(__dirname, "/api", "api.txt"),
//   `User name: ${user}`,
//   (err) => {
//     if (err) throw err;
//   }
// );

// fs.appendFile(
//   path.join(__dirname, "/api", "api.txt"),
//   `\n \t User name: ${user}`,
//   (err) => {
//     if (err) throw err;
//   }
// );

fs.readFile(path.join(__dirname, "/api", "api.txt"), "utf8", (err, data) => {
  if (err) throw err;

  console.log(data);
});
