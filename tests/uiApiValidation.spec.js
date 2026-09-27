import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { TransferPage } from '../pages/TransferPage.js';

test('Validate UI transfer using API', async ({ page, request }) => {

    // Step 1: Login through UI
    const loginPage = new LoginPage(page);

    await page.goto('');

    await loginPage.login('john', 'demo');

    await expect(page).toHaveTitle('ParaBank | Accounts Overview');

    // Step 2: Transfer funds through UI
    const transferPage = new TransferPage(page);

    await transferPage.transferFunds('10', '13344', '12345');

    await expect(page.getByText('Transfer Complete!')).toBeVisible();

    // Step 3: Validate account using API
    const response = await request.get(
        'https://parabank.parasoft.com/parabank/services/bank/accounts/13344'
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.text();

    console.log('API Account Response:');
    console.log(responseBody);

    expect(responseBody).toContain('<id>13344</id>');
});