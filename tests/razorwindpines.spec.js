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
  
  // Verify that the "About Razorwind Pines" text is visible
  const aboutHeader = page.locator('text=About Razorwind Pines');
  await expect(aboutHeader).toBeVisible();
});

test('carousel next button changes slide', async ({ page }) => {
  await page.goto('/razorwindpines');
  
  // Scroll to the Gallery section
  await page.locator('h3:has-text("Gallery")').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  
  // Get the initial image name displayed below carousel
  const initialImageName = await page.locator('text=/^(Foyer|Banquet Hall|Kitchen|Libary|Kafa Shop|Zadwick|The Violet Lounge|The Upper Deck)/').first().textContent();
  
  // Click the next button (ArrowForwardIcon button)
  const nextButton = page.locator('button[aria-label="next"]');
  await nextButton.click();
  
  // Wait for slide transition
  await page.waitForTimeout(500);
  
  // Get the new image name - it should be different
  const newImageName = await page.locator('text=/^(Foyer|Banquet Hall|Kitchen|Libary|Kafa Shop|Zadwick|The Violet Lounge|The Upper Deck)/').first().textContent();
  
  // Verify that the image has changed
  expect(newImageName).not.toBe(initialImageName);
});

test('carousel previous button changes slide', async ({ page }) => {
  await page.goto('/razorwindpines');
  
  // Scroll to the Gallery section
  await page.locator('h3:has-text("Gallery")').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  
  // Click next button twice to ensure we're not at the first slide
  const nextButton = page.locator('button[aria-label="next"]');
  await nextButton.click();
  await page.waitForTimeout(300);
  await nextButton.click();
  await page.waitForTimeout(300);
  
  // Get the current image name
  const currentImageName = await page.locator('text=/^(Foyer|Banquet Hall|Kitchen|Libary|Kafa Shop|Zadwick|The Violet Lounge|The Upper Deck)/').first().textContent();
  
  // Click the previous button
  const prevButton = page.locator('button[aria-label="previous"]');
  await prevButton.click();
  
  // Wait for slide transition
  await page.waitForTimeout(500);
  
  // Get the new image name - it should be different
  const newImageName = await page.locator('text=/^(Foyer|Banquet Hall|Kitchen|Libary|Kafa Shop|Zadwick|The Violet Lounge|The Upper Deck)/').first().textContent();
  
  // Verify that the image has changed
  expect(newImageName).not.toBe(currentImageName);
});
