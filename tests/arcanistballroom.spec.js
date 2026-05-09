import { test, expect } from '@playwright/test';

test('arcanist ballroom page title and description', async ({ page }) => {
  await page.goto('/arcanistballroom');
  await expect(page).toHaveTitle(/Arcanist Ballroom/);
  const desc = await page.locator('meta[name="description"]').getAttribute('content');
  expect(desc).toContain('Arcanist Ballroom');
});

test('about button scrolls to about section', async ({ page }) => {
  await page.goto('/arcanistballroom');
  const initialScrollY = await page.evaluate(() => window.scrollY);
  expect(initialScrollY).toBe(0);
  await page.click('button:has-text("About")');
  await page.waitForTimeout(1000);
  const newScrollY = await page.evaluate(() => window.scrollY);
  expect(newScrollY).toBeGreaterThan(initialScrollY);
  const aboutHeader = page.getByRole('heading', { name: 'About' });
  await expect(aboutHeader).toBeVisible();
});

test('carousel next button changes slide', async ({ page }) => {
  await page.goto('/arcanistballroom');
  await page.locator('h3:has-text("Gallery")').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  const initialImageName = await page.locator('text=/^(Ballroom|Bar Entry|Bar Left|Bar Right|Exterior Entry|Exterior Front|Exterior Profile|Gallery Walkway|Game Room|Grand Stair|Library|Library Corner|Story Circle and Flower Garden|Theater Audience|Theater Stage)/').first().textContent();
  const nextButton = page.locator('button[aria-label="next"]');
  await nextButton.click();
  await page.waitForTimeout(500);
  const newImageName = await page.locator('text=/^(Ballroom|Bar Entry|Bar Left|Bar Right|Exterior Entry|Exterior Front|Exterior Profile|Gallery Walkway|Game Room|Grand Stair|Library|Library Corner|Story Circle and Flower Garden|Theater Audience|Theater Stage)/').first().textContent();
  expect(newImageName).not.toBe(initialImageName);
});

test('carousel previous button changes slide', async ({ page }) => {
  await page.goto('/arcanistballroom');
  await page.locator('h3:has-text("Gallery")').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  const nextButton = page.locator('button[aria-label="next"]');
  await nextButton.click();
  await page.waitForTimeout(300);
  await nextButton.click();
  await page.waitForTimeout(300);
  const currentImageName = await page.locator('text=/^(Ballroom|Bar Entry|Bar Left|Bar Right|Exterior Entry|Exterior Front|Exterior Profile|Gallery Walkway|Game Room|Grand Stair|Library|Library Corner|Story Circle and Flower Garden|Theater Audience|Theater Stage)/').first().textContent();
  const prevButton = page.locator('button[aria-label="previous"]');
  await prevButton.click();
  await page.waitForTimeout(500);
  const newImageName = await page.locator('text=/^(Ballroom|Bar Entry|Bar Left|Bar Right|Exterior Entry|Exterior Front|Exterior Profile|Gallery Walkway|Game Room|Grand Stair|Library|Library Corner|Story Circle and Flower Garden|Theater Audience|Theater Stage)/').first().textContent();
  expect(newImageName).not.toBe(currentImageName);
});
