let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:3000';

//DAR DE BAJA CUENTA
describe('Prueba para iniciar sesión ', ()=>{
    it('Inicio de sesión con usuario', async () => {
        let res = await chai
        .request(url)
        .post('/login')
        .send({username:"user1", password:123});
        expect(res.status).to.equal(200);
    });
    it('Inicio de sesión con correo', async () => {
        let res = await chai
        .request(url)
        .post('/login')
        .send({username:"user1@correo.com", password:123});
        expect(res.status).to.equal(200);
    });
    it('Usuario no existente', async () => {
        let res = await chai
        .request(url)
        .post('/login')
        .send({username:"user2", password:123});
        expect(res.body).to.be.empty;
    });
    it('No ingresa usuario', async () => {
        let res = await chai
        .request(url)
        .post('/login')
        .send({password:123});
        expect(res.status).to.be.equal(500);
    });
    it('No ingresa password', async () => {
        let res = await chai
        .request(url)
        .post('/login')
        .send({username:"user2"});
        expect(res.status).to.be.equal(500);
    });
    it('Usuario vacio', async () => {
        let res = await chai
        .request(url)
        .post('/login')
        .send({correo:"", password:123});
        expect(res.status).to.be.equal(500);
    });
    it('Password vacia', async () => {
        let res = await chai
        .request(url)
        .post('/login')
        .send({username:"user2", password:""});
        expect(res.status).to.be.equal(500);
    });
});

describe.only('Prueba para obtener informacion de una cuenta de usuario', ()=>{
    // before(async () =>{ //creando una cuenta prototipo
    //     let res = await chai
    //     .request(url)
    //     .post('/registrar_usuario')
    //     .send({nombre:"nombretest", apellido:"apellidopasword",dpi:"123456",edad:20});
    //     expect(res.status).to.be.equal(500);

    //     let res2 = await chai
    //     .request(url)
    //     .get('/ultimo_usuario')
    //     expect(res2.status).to.be.equal(500);

    //     let res3 = await chai
    //     .request(url)
    //     .post('/registrar_cuenta')
    //     .send({username:"usertest", correo:"correotest@test.com",password:"123456",id:res2.body[0].id});
    //     expect(res3.status).to.be.equal(500);
    //   });
    
    it('debe poder obtener una cuenta de usuario registrada ', async () => {
        let res = await chai
        .request(url)
        .get('/get_info_usuario')
        .send({username:"user1"});
        expect(res.status).to.equal(200);
    });

    // after(async() =>{  //dar de baja la cuenta
    //     let res = await chai
    //     .request(url)
    //     .post('/registrar_usuario')
    //     .send({nombre:"nombretest", apellido:"apellidopasword",dpi:"123456",edad:20});
    //     expect(res.status).to.be.equal(500);
    // });
});



/*
***********************************************
******* PREUBAS UTILIZANDO MOCKS **************
***********************************************
*/

//************ OBTENER USUARIOS POR MOCK ************* */
describe('Mockito de obtner usuarios',()=>{
    it('Debe poder obtener usuarios ', (done) => {
       let res = chai
          .request(url)
          .get('/mock_get_usuarios')
          .end(function (err, res) {
             console.log(res.body)
             expect(res).to.have.status(200);
             done();
          });
    });
});