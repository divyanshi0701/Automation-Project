const{ test, expect } = require('@playwright/test');
const { request } = require('node:http');

test('Get users API', async({request}) => {
    const response = await request.get('https://reqres.in/api/collections/users/records', {
    headers: { 'x-api-key': 'pro_67b46e8e910aa8417f9cfba9c24548be0e80b0c41bc17f78b7d0a98af769b4d7' }
  });

    //Status validation
    expect(response.status()).toBe(200);

    const data = await response.json();

    //Data validation
    expect(data.data.length).toBeGreaterThan(0);
    // expect(data.role).toBe('admin');
});


test('Post users API', async({request}) => {
    const response = await request.post('https://reqres.in/api/test-suite/collections/users/records', {
        headers: { 'x-api-key': 'pro_67b46e8e910aa8417f9cfba9c24548be0e80b0c41bc17f78b7d0a98af769b4d7' },
        data: {
            "name": "Jane Doe",
            "email": "jane@example.com",
            "role": "admin"
        }
    });

    expect(response.status()).toBe(201);

    const data = await response.json();

    expect(data.name).toBe('Jane Doe');
    expect(data.role).toBe('admin');
});