import { test, expect } from '@playwright/test';

test('Upload a file', async ({ page }) => {

    await page.setContent(`
        <input type="file" id="fileUpload">
    `);

    // Upload file
    await page.locator('#fileUpload').setInputFiles(
        'test-data/upload.txt'
    );

    // Verify file was selected
    const fileName = await page.locator('#fileUpload').evaluate(
        input => input.files[0].name
    );

    expect(fileName).toBe('upload.txt');

    console.log('Uploaded file:', fileName);
});