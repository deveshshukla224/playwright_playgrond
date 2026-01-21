import {test, expect} from '@playwright/test';

test('Hover over element', async ({ page }) => {
  await page.goto('https://bigbasket.com');
  await page.locator('[id="headlessui-menu-button-:Ramkj6:"]').click();
  await page.locator('[id="headlessui-menu-items-:Rimkj6:"]').getByRole('link', { name: 'Food Court' }).hover();
  await page.getByRole('link', { name: 'Cold Beverages'}).hover();
  await page.getByRole('link', { name: 'Iced Tea' }).click();
});