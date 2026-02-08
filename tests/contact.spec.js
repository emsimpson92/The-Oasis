import { test, expect } from '@playwright/test';

test('contact page title and description', async ({ page }) => {
  await page.goto('/contact');
  await expect(page).toHaveTitle(/Contact — The Oasis/);
  const desc = await page.locator('meta[name="description"]').getAttribute('content');
  expect(desc).toContain('Contact The Oasis community team');
});
