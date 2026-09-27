import { test, expect } from '@playwright/test';

test('Handle API 500 error', async ({ page }) => {

    // Mock API failure
    await page.route('https://example.com/api/user', async route => {

        await route.fulfill({
            status: 500,
            contentType: 'application/json',
            body: JSON.stringify({
                error: 'Internal Server Error'
            })
        });

    });

    // Open page with a valid base URL
    await page.goto('https://example.com');

    await page.setContent(`
        <button id="loadUser">Load User</button>
        <div id="result"></div>

        <script>
            document.getElementById('loadUser').onclick = async () => {

                const response = await fetch('/api/user');

                if (!response.ok) {
                    document.getElementById('result').textContent =
                        'Unable to load user details';
                    return;
                }

                const user = await response.json();

                document.getElementById('result').textContent =
                    user.name;
            };
        </script>
    `);

    // Trigger API call
    await page.locator('#loadUser').click();

    // Verify error handling
    await expect(page.locator('#result'))
        .toHaveText('Unable to load user details');
});