import { test, expect } from '@playwright/test';

test('map page title and description', async ({ page }) => {
  await page.goto('/map');
  await expect(page).toHaveTitle(/Explore the Oasis Map/);
  const desc = await page.locator('meta[name="description"]').getAttribute('content');
  expect(desc).toContain('View plot locations');
});
