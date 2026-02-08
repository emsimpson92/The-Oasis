import { test, expect } from '@playwright/test';

test('event request page title and description', async ({ page }) => {
  await page.goto('/events/request');
  await expect(page).toHaveTitle(/Event Request/);
  const desc = await page.locator('meta[name="description"]').getAttribute('content');
  expect(desc).toContain('Request an event');
});

test('submit button is disabled when form is empty', async ({ page }) => {
  await page.goto('/events/request');
  
  // Verify submit button is disabled by default (no form data entered)
  const submitButton = page.locator('button:has-text("Submit")');
  await expect(submitButton).toBeDisabled();
  
  // Fill in all required fields
  await page.locator('input').nth(0).fill('TestChar');
  await page.locator('input').nth(1).fill('Test Event');
  await page.locator('textarea').nth(0).fill('Test Description');
  
  // Verify submit button is now enabled
  await expect(submitButton).toBeEnabled();
  
  // Clear the description field
  await page.locator('textarea').nth(0).fill('');
  
  // Verify submit button is disabled again when any required field is empty
  await expect(submitButton).toBeDisabled();
});
