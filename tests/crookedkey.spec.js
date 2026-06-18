import { test, expect } from '@playwright/test';

test('crookedkey page title and description', async ({ page }) => {
  await page.goto('/crookedkey');
  await expect(page).toHaveTitle(/The Crooked Key/);
  const desc = await page.locator('meta[name="description"]').getAttribute('content');
  expect(desc).toContain('The Crooked Key');
});

test('about button scrolls to about section', async ({ page }) => {
  await page.goto('/crookedkey');
  
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
  const aboutHeader = page.locator('h3:has-text("About")');
  await expect(aboutHeader).toBeVisible();
});

const getCrookedKeyVisibleCarouselSrc = async (page) => {
  return page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h3'));
    const galleryHeading = headings.find((heading) => heading.textContent?.trim() === 'Gallery');
    if (!galleryHeading) return '';
    const carousel = galleryHeading.nextElementSibling;
    if (!carousel) return '';
    const images = Array.from(carousel.querySelectorAll('img[alt]'));
    const visible = images.find((img) => img.parentElement && window.getComputedStyle(img.parentElement).opacity === '1');
    return visible?.src || '';
  });
};
