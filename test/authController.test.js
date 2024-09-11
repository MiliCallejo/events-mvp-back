const request = require('supertest');
const app = require('../app');

describe('POST /api/auth/login', () => {
  it('debe retornar un token si las credenciales son correctas', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@admin.com', password: '123456' });
    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});
