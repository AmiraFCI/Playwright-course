import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('[data-test="username"]')).toBeVisible();
  await expect(page.locator('[data-test="password"]')).toBeVisible();
  await expect(page.locator('#root')).toContainText('Swag Labs');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="inventory-list"]')).toContainText('$29.99');
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Checkout');
  await page.locator('[data-test="item-4-title-link"]').click();
  await page.locator('[data-test="secondary-header"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="item-4-title-link"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('asd');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('');
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('asd');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('tes');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('2324');
  await page.locator('[data-test="continue"]').click();
  await expect(page.locator('[data-test="inventory-item-price"]')).toContainText('$29.99');
  await expect(page.locator('[data-test="subtotal-label"]')).toContainText('Item total: $29.99');
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
});

