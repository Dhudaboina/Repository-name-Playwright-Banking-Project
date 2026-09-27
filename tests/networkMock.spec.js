import { test, expect } from '@playwright/test';

test('Mock API response', async ({ page }) => {

    // Mock the API
    await page.route('https://example.com/api/user', async route => {

        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                id: 101,
                name: 'Bhavani',
                role: 'QA Engineer'
            })
        });

    });

    // Open a real page so relative API URL has a valid base
    await page.goto('https://example.com');

    // Create our test UI
    await page.setContent(`
        <button id="loadUser">Load User</button>
        <div id="result"></div>

        <script>
            document.getElementById('loadUser').onclick = async () => {

                const response = await fetch('/api/user');

                const user = await response.json();

                document.getElementById('result').textContent =
                    user.name + ' - ' + user.role;
            };
        </script>
    `);

    // Trigger API call
    await page.locator('#loadUser').click();

    // Verify mocked API response
    await expect(page.locator('#result'))
        .toHaveText('Bhavani - QA Engineer');
});