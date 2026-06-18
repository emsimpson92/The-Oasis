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

const getVisibleCarouselImageSrc = async (page) => {
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
