
const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())

app.get("/", (req, res) => {
res.send("<h1>This is the For ECS Pipeline<h1/>")

})

app.listen(8080, () => {

console.log("listning from port 8080")

})