const express = require('express')
const path = require('path')
const db = require('./db');
const { Campus, Student } = db.models;

const app = express()

// static middleware
app.use('/dist', express.static(path.join(__dirname, '../dist')))

app.use('/api/students', require('./studentRoutes'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}); 

// app.get('/campuses', async(req, res, next) => {
//   try {
//     res.send( await Campus.findAll() )
//   }
//   catch(err) {
//     next(err)
//   }
// });

// app.get('/students', async (req, res, next) => {
//   try {
//     res.send(await Student.findAll())
//   }
//   catch (err) {
//     next(err)
//   }
// });

// app.get('/students',)
module.exports = app;

