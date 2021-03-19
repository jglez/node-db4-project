// Import server
const server = require('./api/server.js')

const port = 5000

// Start server
server.listen(port, () => {
  console.log(`Listening to port ${port}`)
})