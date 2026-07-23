import { test, expect } from '@playwright/test';

test('page loads and has correct title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});

test('page contains expected text', async ({ page }) => {
  await page.goto('https://example.com');
  const body = page.locator('body');
await expect(body).toContainText('This domain is for use in documentation examples');
});
