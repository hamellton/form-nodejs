const http = require('http')
const operationSystem = require('./modules/operationSystem')
const currentDate = require('./modules/timeDate')
const fs = require('fs')
const { parse } = require('querystring')
const url = require('url')

const PORT = 4000

http.createServer((req, res) => {
    let homePage = () => {
        fs.readFile('../front/index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length})
            res.write(data)
            res.end(data)
        })
    }


    if (req.method == 'POST') {
        console.log('POST request should be done!!!')

        let body = {}
        
        req.on('data', (data) => {
            body += data.toString()

        })
        req.on('end', () => {
            let response = parse(body)
            console.log(response)
        })
    } else if (req.method == 'GET') {
        let urlParts = url.parse(req.url)
        switch (urlParts.pathname) {
            case "/":
                homePage()
                break
        }
    }

}).listen(PORT, () => {
    console.log(`Server has been started on PORT: ${PORT}`)
});