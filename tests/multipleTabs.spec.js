import { test, expect } from '@playwright/test';

test('Handle multiple tabs', async ({ page }) => {

    // Open a simple page
    await page.setContent(`
        <a href="https://example.com" target="_blank">
            Open New Tab
        </a>
    `);

    // Wait for the new tab while clicking the link
    const newPagePromise = page.waitForEvent('popup');

    await page.getByRole('link', { name: 'Open New Tab' }).click();

    const newPage = await newPagePromise;

    // Wait for the new tab to load
    await newPage.waitForLoadState();

    // Verify new tab
    console.log('New tab title:', await newPage.title());

    await expect(newPage).toHaveTitle('Example Domain');
});