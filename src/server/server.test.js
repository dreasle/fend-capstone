const request = require('supertest')
const server = require('./server.js')

test('Root endpoint', (done) => {
    const res = request(server)
        .get('/')
        .then(res => {
            expect(res.statusCode).toBe(200)
            // expect(res.statusCode).toEqual(200)
            done();
        })
})