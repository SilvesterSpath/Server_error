const express = require('express');
require('dotenv').config({path: './.env'});
const morgan = require('morgan')
const members = require('./Members')

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))

app.get('/', (req, res)=>{ 
  console.log('req.query:', req.query)
  const value1 = req.query.value1 ?? ''
  const value2 = req.query.value2 ?? ''

  const response = members.filter((item)=> item.age == value2)
    console.log('response: ', response)

  if(response.length != 0) {
    
    res.send(response)
  } else {
    res.status(500).send('Item not found')    
  }
})

app.get('/:id', (req, res)=>{
  console.log('req.params:', req.params)
  res.send(req.params)
})



const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log(`Server listening on port: ${PORT}`)
})