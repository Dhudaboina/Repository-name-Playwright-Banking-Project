import { test, expect } from '@playwright/test';

test('Handle browser alert', async ({ page }) => {

    // Handle the alert
    page.on('dialog', async dialog => {

        console.log('Dialog message:', dialog.message());

        await dialog.accept();
    });

    // Open a page containing JavaScript
    await page.setContent(`
        <button onclick="alert('Transfer completed successfully')">
            Complete Transfer
        </button>
    `);

    // Click the button
    await page.getByRole('button', { name: 'Complete Transfer' }).click();

});