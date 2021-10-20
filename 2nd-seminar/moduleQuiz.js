const fs = require("fs");
const crypto = require("crypto");

const title = "password.txt";
const data = fs.readFileSync(title);

const hashedPassword = crypto.createHash("sha512").update(data).digest("hex");

const hashedTitle = "hashed.txt";
fs.writeFileSync(hashedTitle, hashedPassword);