const { test, expect } = require('@playwright/test');

test('Проверка заголовка страницы Playwright', async ({ page }) => {
  // 1. Переходим на сайт
  await page.goto('https://playwright.dev/');

  // 2. Сверяем заголовок вкладки
  await expect(page).toHaveTitle(/Fast and reliable/);
});