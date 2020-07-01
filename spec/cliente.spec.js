const Cliente = require("../models/cliente")

describe('Clientes', () => {
    test('Deve fazer o teste de match', () => {
        const cliente = new Cliente();

        expect(cliente.nome).not.beUndefined;
    });
})