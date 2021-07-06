const express = require("express");
const server = express();
const path = require("path")

server.set("view engine", 'ejs').set("views", path.join(__dirname + `/views/pages/`))

server.get("/", function(req, res) {
    const items = [
        {
            title: "D",
            message:"Something with D"
        },
        {
            title: "E",
            message:"Something with EJS"
        }
    ]
    const subtitle = `It's a subititle`;
    res.render("index", { items, subtitle });
})

server.get("/about", function(req, res) {
    res.render("about");
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log(`Go to http://127.0.0.1:${PORT}`);
})
