const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const db = knex ({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'motorola1111',
    database : 'cookbook'
  }
});

// db.select('*').from('menu').then(data => {
//   console.log(data);
// });

const app = express();

app.use(bodyParser.json());
app.use(cors());

const database = {
  users: [
    {
      id: '1',
      name: 'Pie',
      description: 'very fast and testy',
      creation: Date()
    }
  ]
}

app.get('/', (req, res) => {
  res.send(database.users);
 })

 // app.post('/', (req, res) => {
 //   if (req.body.id === database.users[1].id &&
 //       req.body.name === database.users[1].name) {
 //         res.json('succes')
 //       } else {
 //         res.status('400').json('error loggin in');
 //       }
 //  })


app.listen(3000, () => {
  console.log('app is running on port 3000');
})
