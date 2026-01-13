import { test, expect } from '@playwright/test';

test('phpinfo page loads', async ({ page }) => {
  await page.goto('http://localhost:8000');

  // phpinfo always contains this text
  await expect(page.locator('body')).toContainText('PHP Version');
});