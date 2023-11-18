const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

const app = require('../../src/app'); // Substitua pelo caminho do seu arquivo de servidor Express

describe('API Tests', function() {
  let server;

  before(done =>{
    server = app.listen(3000,done);
  })  
  
  after(done => {
      server.close(done);
  });
  
  it('GET / should be return status 200 and response a object with hello world', function(done) {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body.message).to.equal('Hello, world');
        done();
      });
  });
  it('GET /products should be return status 200 and response a array', function(done){
    chai.request(app)
      .get('/products')
      .end((err,res)=>{
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('array')
        done()
      })
  });
  it('POST /product/:userId should be return status 201 and response a object with product id', function(done){
    chai.request(app)
      .post('/product/1')
      .send({name: "monkey", category: "NFT"})
      .end((err, res)=>{
        expect(res).to.have.status(201)
        expect(res.body).to.be.a('object')
        expect(res.body.productId).to.be.equal(1)
        done()
      })
  });
  it('GET /products/:userId should be return status 200 and response a product objects array of user', function(done){
    chai.request(app)
      .get('/products/1')
      .end((err,res)=>{
        expect(res).to.have.status(200)
        expect(res.body).to.be.a('array')
        expect(res.body.every( product => product.userId == 1)).to.be.equal(true)
        done()
      })
  })
});