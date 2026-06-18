import { test, expect } from '@playwright/test';

test('karuma sedei page title and description', async ({ page }) => {
  await page.goto('/karumasedei');
  await expect(page).toHaveTitle(/Karuma Sedei/);
  const desc = await page.locator('meta[name="description"]').getAttribute('content');
  expect(desc).toContain('Karuma Sedei');
});

test('about button scrolls to about section', async ({ page }) => {
  await page.goto('/karumasedei');

  const initialScrollY = await page.evaluate(() => window.scrollY);
  expect(initialScrollY).toBe(0);

  await page.click('button:has-text("About")');
  await page.waitForTimeout(1000);

  const newScrollY = await page.evaluate(() => window.scrollY);
  expect(newScrollY).toBeGreaterThan(initialScrollY);

  const aboutHeader = page.getByRole('heading', { name: 'About' });
  await expect(aboutHeader).toBeVisible();
});
