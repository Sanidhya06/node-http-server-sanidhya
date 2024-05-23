const http = require("http")
const fs=require("fs")
const app = http.createServer((req, res) => {

    if (req.url === "/") {
        const pageData= fs.readFileSync("pages/index.html")

//        res.write("<h1> Server started.....</h1>")
  
       res.write(pageData)
        res.end()
    }
    else if (req.url === "/about") {
        const pageData= fs.readFileSync("pages/about.html")
        res.write(pageData)
        //res.write("<h1> About Page </h1>")
        res.end()
    }
    else if (req.url === "/contact") {
        const pageData= fs.readFileSync("pages/contact.html")
        res.write(pageData)
        //res.write("<h1> Contact Page </h1>")
        res.end()
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" })
        const pageData= fs.readFileSync("pages/404.html")
        res.write(pageData)
        //res.write("<h1> Error 404 page not found</h1>")
        res.end()
    }
})
// app.listen(port,ip,callback-function()) 
app.listen(3000, () => {
    console.log("Server started on http://127.0.0.1:3000")
}) 
