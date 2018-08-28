const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const massive = require('massive');
const products_controller = require('./products_controller')

const app = express();

massive(process.env.CONNECTION_STRING).then(dataBase => {
  app.set('db', dataBase)
}).catch(error => console.log(error)
)

app.use(bodyParser.json())


app.post('/api/product', products_controller.create)
app.get('/api/products', products_controller.getAll)
app.get('/api/product/:id', products_controller.getOne)
app.put('/api/product/:id', products_controller.update)
app.delete('/api/product/:id', products_controller.delete)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);

})