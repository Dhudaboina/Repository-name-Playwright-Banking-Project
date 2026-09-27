import { test, expect } from '@playwright/test';

test('Validate destination account', async ({ request }) => {

    const response = await request.get(
        'https://parabank.parasoft.com/parabank/services/bank/accounts/12345'
    );

    console.log('Status:', response.status());

    const responseBody = await response.text();

    console.log('Account 12345:');
    console.log(responseBody);

    expect(response.status()).toBe(200);
    expect(responseBody).toContain('<id>12345</id>');
});