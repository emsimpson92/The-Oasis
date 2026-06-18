import { test, expect } from '@playwright/test';

test.describe('The Buried God page', () => {
  test('loads and displays the hero title', async ({ page }) => {
    await page.goto('/chronicles/theburiedgod');
    await expect(page).toHaveTitle(/The Buried God/);
    await expect(page.locator('h1')).toHaveText('The Buried God');
  });

  test('includes page content and article intro', async ({ page }) => {
    await page.goto('/chronicles/theburiedgod');
    const intro = page.locator('article').locator('p').first();
    await expect(intro).toContainText('A strange tablet was found off the coast of the Oasis near a shipwreck');
  });

  test('shows carousel and can navigate tablets', async ({ page }) => {
    await page.goto('/chronicles/theburiedgod');
    const nextButton = page.getByRole('button', { name: /next/i });
    const previousButton = page.getByRole('button', { name: /previous/i });

    await expect(page.locator('text=Tablet 1')).toBeVisible();
    await nextButton.click();
    await expect(page.locator('text=Tablet 2')).toBeVisible();

    await previousButton.click();
    await expect(page.locator('text=Tablet 1')).toBeVisible();
  });
});