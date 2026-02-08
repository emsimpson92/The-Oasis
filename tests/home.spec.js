import { test, expect } from '@playwright/test';

test('home page title and description', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/The Oasis — Home/);
  const desc = await page.locator('meta[name="description"]').getAttribute('content');
  expect(desc).toContain('The Oasis is a cross-faction');
});

test('explore button scrolls to activities section', async ({ page }) => {
  await page.goto('/');
  
  // Get initial scroll position
  const initialScrollY = await page.evaluate(() => window.scrollY);
  expect(initialScrollY).toBe(0);
  
  // Click the Explore button
  await page.click('button:has-text("Explore")');
  
  // Wait for smooth scroll to complete
  await page.waitForTimeout(1000);
  
  // Get new scroll position (should be greater than initial)
  const newScrollY = await page.evaluate(() => window.scrollY);
  expect(newScrollY).toBeGreaterThan(initialScrollY);
  
  // Verify that the "Our Venues" text is visible
  const venuesHeader = page.locator('text=Our Venues');
  await expect(venuesHeader).toBeVisible();
});
