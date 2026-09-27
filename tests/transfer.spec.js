import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { TransferPage } from '../pages/TransferPage.js';

test.describe('Fund Transfer Tests', () => {

    test('Verify successful fund transfer', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await page.goto('');

        await loginPage.login('john', 'demo');

        const transferPage = new TransferPage(page);

        await transferPage.transferFunds('100', '13344', '12345');

        await expect(page.getByText('Transfer Complete!')).toBeVisible();

    });

});