import { test, expect } from '@playwright/test';

test('home page title and description', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/The Oasis — Home/);
  const desc = await page.locator('meta[name="description"]').getAttribute('content');
  expect(desc).toContain('The Oasis is a cross-faction');
});
