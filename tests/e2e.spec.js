import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { TransferPage } from '../pages/TransferPage.js';

test('Complete banking E2E flow', async ({ page }) => {

    // Step 1: Login
    const loginPage = new LoginPage(page);

    await page.goto('');

    await loginPage.login('john', 'demo');

    // Step 2: Verify successful login
    await expect(page).toHaveTitle('ParaBank | Accounts Overview');

    // Step 3: Transfer funds
    const transferPage = new TransferPage(page);

    await transferPage.transferFunds('10', '13344', '12345');

    // Step 4: Verify transfer
    await expect(page.getByText('Transfer Complete!')).toBeVisible();

    // Step 5: Logout
    await page.getByRole('link', { name: 'Log Out' }).click();

    // Step 6: Verify logout
    await expect(page.locator('input[name="username"]')).toBeVisible();

});