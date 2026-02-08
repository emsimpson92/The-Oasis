import { test, expect } from '@playwright/test';

test('about page title and description', async ({ page }) => {
  await page.goto('/about');
  await expect(page).toHaveTitle(/About The Oasis/);
  const desc = await page.locator('meta[name="description"]').getAttribute('content');
  expect(desc).toContain('Learn about The Oasis');
});
