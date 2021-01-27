const http = require('http')
const fs = require('fs')
const path = require('path')
const { parse } = require('querystring')
let mongo = require('./database/config')
const User = require('./database/models')


const server = http.createServer((req, res) => {
  mongo.db()

  let filePath = path.join(__dirname, 'front', req.url === '/' ? 'index.html' : req.url)
  const ext = path.extname(filePath)
  let contentType = 'text/html'

  switch (ext) {
    case '.css':
      contentType = 'text/css'
      break
    case '.js':
      contentType = 'text/javascript'
      break
    default:
      contentType = 'text/html'
  }

  if (!ext) {
    filePath += '.html'
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
        if (err) {
          res.writeHead(500)
          res.end('Error')
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/html'
          })
          res.end(data)
        }
      })
    } else {
      res.writeHead(200, {
        'Content-Type': contentType
      })
      res.end(content)
    }
  })
  if (req.method == 'POST') {
    let body = {}

    req.on('data', (data) => {
        body += data.toString()
    })
    req.on('end', () => {

        let response = parse(body)
        console.log(response)

        const user = new User(response);
        user.save().then(() => console.log('response save'));
        console.log(response)
    })
    console.log('POST method has been done!!!')
    res.end('Data send on server!!!')
}

})

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}...`)
})