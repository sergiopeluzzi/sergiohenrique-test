const frisby = require('frisby');
const url = 'http://localhost:3000';

describe('-- Testes de integração: USERS', () => {
    it('GET /USERS - Deve retornar status code 200', () => {
        return frisby
            .get(`${url}/users`)
            .expect('status', 200);
    });
    
    it('POST /USERS - Deve retornar status code 401 sem auth', () => {
        return frisby
            .post(`${url}/users`, {
                name: 'Teste',
                email: 'teste@teste.com',
                password: '123456'
            })
            .expect('status', 401);
    });

    it('POST /USERS/LOGIN - Deve retornar status code 200', () => {
        return frisby
            .post(`${url}/login`, {
                email: 'root@email.com',
                password: 'admin'
            })
            .expect('status', 200);
            
    })
});

describe('-- Testes de integração: RECIPES', () => {
    it('GET /RECIPES - Deve retornar status code 200', () => {
        return frisby
            .get(`${url}/recipes`)
            .expect('status', 200);
    });
    
    it('POST /RECIPES - Deve retornar status code 401 sem auth', () => {
        return frisby
            .post(`${url}/recipes`, {
                name: 'Teste',
                ingredients: 'ingredientes teste',
                preparation: 'preparação teste'
            })
            .expect('status', 401);
    });

    it('PUT /RECIPES/:ID - Deve retornar status 401 sem auth', () => {
        return frisby
            .put(`${url}/recipes/619e56f2429cc96efe6494e4`, {
                name: 'Frango assado'
            })
            .expect('status', 401)
    });

    it('GET /RECIPES/:ID - Deve retornar status 200', () => {
        return frisby
            .get(`${url}/recipes/619e56f2429cc96efe6494e4`)
            .expect('status', 200);
            
    });
});



