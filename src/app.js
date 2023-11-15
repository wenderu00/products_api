const express = require('express');
const app = express();
const port = 3000;
const Catalog = require('./catalog')
const catalog = new  Catalog();

app.use(express.json())
app.post('/product/:userId', (req,res)=>{
  let id = catalog.addOnCatalog(req.body,req.params.userId);
  res.status(201).send({productId: id})
})

app.get('/', (req, res) => {
  res.send({message: "Hello, world"});
});

app.get("/products", (req,res)=>{
  res.status(200).send(catalog.products)
})

app.get("/products/:userId",(req,res)=>{
  res.status(200).send(catalog.getProductsById(req.params.id))
})

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});

module.exports = app