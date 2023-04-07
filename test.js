const { handler } = require('./index.js');

describe('handler', () => {
    test('stores user preferences in MySQL table', async () => {
        const preferences = {
            superUser: true,
            colorTheme: 'dark',
        };
        const event = {
            body: JSON.stringify(preferences),
        };
        const response = await handler(event);
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.body)).toEqual({
            success: true,
            data: {},
        });
    });
});
