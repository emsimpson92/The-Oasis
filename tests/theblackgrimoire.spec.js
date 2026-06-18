import { test, expect } from '@playwright/test';

test.describe('The Black Grimoire page', () => {
  test('loads and displays the hero title', async ({ page }) => {
    await page.goto('/chronicles/theblackgrimoire');
    await expect(page).toHaveTitle(/The Black Grimoire/);
    await expect(page.locator('h1')).toHaveText('The Black Grimoire');
  });

  test('includes page content and article intro', async ({ page }) => {
    await page.goto('/chronicles/theblackgrimoire');
    const intro = page.locator('article').locator('p').first();
    await expect(intro).toContainText('Members of the community worked together to piece together the story of the Black Grimoire');
  });

  test('shows carousel and can navigate pages', async ({ page }) => {
    await page.goto('/chronicles/theblackgrimoire');
    const nextButton = page.getByRole('button', { name: /next/i });
    const previousButton = page.getByRole('button', { name: /previous/i });
    const pageLabel = page.locator('text=Page 1').first();

    await expect(pageLabel).toBeVisible();
    await nextButton.click();
    await expect(page.locator('text=Page 2')).toBeVisible();

    await previousButton.click();
    await expect(page.locator('text=Page 1')).toBeVisible();
  });
});