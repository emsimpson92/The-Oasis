import { test, expect } from '@playwright/test';

test('contact page title and description', async ({ page }) => {
  await page.goto('/contact');
  await expect(page).toHaveTitle(/Contact — The Oasis/);
  const desc = await page.locator('meta[name="description"]').getAttribute('content');
  expect(desc).toContain('Contact The Oasis community team');
});

test('submit button is disabled when message is empty', async ({ page }) => {
  await page.goto('/contact');
  
  // Verify submit button is disabled by default (no message entered)
  const submitButton = page.locator('button:has-text("Submit")');
  await expect(submitButton).toBeDisabled();
  
  // Enter a message in the textarea
  const messageField = page.locator('textarea').nth(0);
  await messageField.fill('Test message');
  
  // Verify submit button is now enabled
  await expect(submitButton).toBeEnabled();
  
  // Clear the message
  await messageField.fill('');
  
  // Verify submit button is disabled again
  await expect(submitButton).toBeDisabled();
});
