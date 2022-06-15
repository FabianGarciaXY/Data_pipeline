const request = require('supertest');
const express = require('express');
const router = require('../src/routes/router');

const app = new express();
app.use('/', router);

describe('Good Home Routes', () => {

	test('responds to /', async () => {
		const res = await request(app).get('/');
		expect(res.statusCode).toBe(200);
	});
});