const { test, expect } = require('@playwright/test');

test('Practice actions and assertions', async ({ page }) => {

    await page.goto('https://www.google.com');

    await page.getByRole('combobox', { name: 'Search' }).fill('Playwright');

    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    await expect(page).toHaveTitle(/Playwright|Google/);

});