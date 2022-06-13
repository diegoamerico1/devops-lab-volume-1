const assert = require('assert');
const request = require('supertest');

describe('Api Integration Test', () => {
    let app;

    beforeEach(() => {
        app = require('../src/app');
    });

    it('Should return a welcome message', async () => {
        // Arrange
        const client = request(app);

        // Act
        const response = await client.get('/api/welcome');

        // Assert
        assert.equal(response.status, 200);
        assert.equal(response.body.message, 'Aplicação - DevOps Mercurianos!');
    });
});
