import { test, expect } from '@playwright/test';

test('Handle iframe', async ({ page }) => {

    await page.setContent(`
        <iframe
            srcdoc="
                <html>
                    <body>
                        <input id='username' placeholder='Username'>
                        <button id='login'>Login</button>
                    </body>
                </html>
            "
        ></iframe>
    `);

    // Locate the iframe
    const frame = page.frameLocator('iframe');

    // Enter username inside iframe
    await frame.locator('#username').fill('Vamsi');

    // Click button inside iframe
    await frame.locator('#login').click();

    // Verify username field
    await expect(frame.locator('#username')).toHaveValue('Vamsi');
});