import { test, expect } from '@playwright/test';

test('razorwindpines page title and description', async ({ page }) => {
  await page.goto('/razorwindpines');
  await expect(page).toHaveTitle(/Razorwind Pines Lodge/);
  const desc = await page.locator('meta[name="description"]').getAttribute('content');
  expect(desc).toContain('Razorwind Pines Lodge');
});

test('about button scrolls to about section', async ({ page }) => {
  await page.goto('/razorwindpines');
  
  // Get initial scroll position
  const initialScrollY = await page.evaluate(() => window.scrollY);
  expect(initialScrollY).toBe(0);
  
  // Click the About button
  await page.click('button:has-text("About")');
  
  // Wait for smooth scroll to complete
  await page.waitForTimeout(1000);
  
  // Get new scroll position (should be greater than initial)
  const newScrollY = await page.evaluate(() => window.scrollY);
  expect(newScrollY).toBeGreaterThan(initialScrollY);
  
  // Verify that the "About" text is visible
  const aboutHeader = page.getByRole('heading', { name: 'About' });
  await expect(aboutHeader).toBeVisible();
});
