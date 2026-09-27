import { test, expect } from '@playwright/test';

test('Transfer funds using API', async ({ request }) => {

    const response = await request.post(
        'https://parabank.parasoft.com/parabank/services/bank/transfer',
        {
            params: {
                fromAccountId: '13344',
                toAccountId: '13455',
                amount: '10'
            }
        }
    );

    console.log('Status:', response.status());

    const responseBody = await response.text();

    console.log('Response:', responseBody);

    expect(response.status()).toBe(200);
    expect(responseBody).toContain('Successfully transferred');
});