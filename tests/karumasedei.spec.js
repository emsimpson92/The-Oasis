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

test('carousel next button changes slide', async ({ page }) => {
  await page.goto('/karumasedei');
  await page.locator('h3:has-text("Gallery")').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);

  const initialImageSrc = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img[alt="Exterior"], img[alt="Dining Room"], img[alt="Lounge"], img[alt="Meditation Rooms"]'));
    const visible = images.find((img) => img.parentElement && window.getComputedStyle(img.parentElement).opacity === '1');
    return visible?.src || '';
  });

  const nextButton = page.locator('button[aria-label="next"]');
  await nextButton.click();
  await page.waitForTimeout(500);

  const newImageSrc = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img[alt="Exterior"], img[alt="Dining Room"], img[alt="Lounge"], img[alt="Meditation Rooms"]'));
    const visible = images.find((img) => img.parentElement && window.getComputedStyle(img.parentElement).opacity === '1');
    return visible?.src || '';
  });

  expect(newImageSrc).not.toBe(initialImageSrc);
});

test('carousel previous button changes slide', async ({ page }) => {
  await page.goto('/karumasedei');
  await page.locator('h3:has-text("Gallery")').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);

  const nextButton = page.locator('button[aria-label="next"]');
  await nextButton.click();
  await page.waitForTimeout(300);
  await nextButton.click();
  await page.waitForTimeout(300);

  const currentImageSrc = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img[alt="Exterior"], img[alt="Dining Room"], img[alt="Lounge"], img[alt="Meditation Rooms"]'));
    const visible = images.find((img) => img.parentElement && window.getComputedStyle(img.parentElement).opacity === '1');
    return visible?.src || '';
  });

  const prevButton = page.locator('button[aria-label="previous"]');
  await prevButton.click();
  await page.waitForTimeout(500);

  const newImageSrc = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img[alt="Exterior"], img[alt="Dining Room"], img[alt="Lounge"], img[alt="Meditation Rooms"]'));
    const visible = images.find((img) => img.parentElement && window.getComputedStyle(img.parentElement).opacity === '1');
    return visible?.src || '';
  });

  expect(newImageSrc).not.toBe(currentImageSrc);
});
