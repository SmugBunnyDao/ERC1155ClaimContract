const fs = require("fs")
// fs.writeFileSync("Flattened.sol", JSON.stringify(input))
const contents = fs.readFileSync("./Flattened.sol", "utf8")


const jsonString = JSON.stringify(contents)
console.log('contents===>', jsonString)

