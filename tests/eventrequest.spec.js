import { test, expect } from '@playwright/test';

test('event request page title and description', async ({ page }) => {
  await page.goto('/events/request');
  await expect(page).toHaveTitle(/Event Request/);
  const desc = await page.locator('meta[name="description"]').getAttribute('content');
  expect(desc).toContain('Request an event');
});
