import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test.describe('Banking Login Tests', () => {

    test('Verify successful banking login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await page.goto('');

        await loginPage.login('john', 'demo');

        await expect(page).toHaveTitle('ParaBank | Accounts Overview');
    });

});