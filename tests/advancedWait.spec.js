import { test, expect } from '@playwright/test';

test('Verify explicit wait', async ({ page }) => {

    await page.goto('');

    // Wait for username field
    await page.waitForSelector('input[name="username"]');

    // Verify username field is visible
    await expect(
        page.locator('input[name="username"]')
    ).toBeVisible();

});