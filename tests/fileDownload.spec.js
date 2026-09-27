import { test, expect } from '@playwright/test';

test('Download a file', async ({ page }) => {

    await page.setContent(`
        <a
            href="data:text/plain,This is a downloaded file"
            download="sample.txt"
        >
            Download File
        </a>
    `);

    // Wait for download and click the link
    const downloadPromise = page.waitForEvent('download');

    await page.getByRole('link', { name: 'Download File' }).click();

    // Get downloaded file
    const download = await downloadPromise;

    // Check downloaded file name
    console.log('Downloaded file:', download.suggestedFilename());

    expect(download.suggestedFilename()).toBe('sample.txt');
});