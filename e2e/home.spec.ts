import { expect, test } from '@playwright/test';

test('home page should load', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const title = await page.title();
  expect(title.toLowerCase()).toContain('matheus');
});
