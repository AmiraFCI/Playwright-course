
import { test, expect } from '@playwright/test';

test('first test case invalid login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('asd');
  await page.locator('[data-test="password"]').fill('asd');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]'))
    .toContainText('Epic sadface: Username and password do not match any user in this service');
});

test('second test case description  of item display at checkout page', async ({ page }) => {
   await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="item-4-title-link"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="inventory-item-desc"]')).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');

});
