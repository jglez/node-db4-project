// Import Express
const express = require('express')

// Initialize the Express application
const server = express()

// Enable Express to parse JSON bodies
server.use(express.json())

// First endpoint
server.get('/api/cookbook', (req, res) => {
  res.status(200).json('Response from /api/cookbook')
})

module.exports = server