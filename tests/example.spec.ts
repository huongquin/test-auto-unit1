import { test, expect } from '@playwright/test';

test('web', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  await expect(page).toHaveTitle(/Tài liệu học automation test/);

  await page.getByText('Bài học 1: Register Page (có đủ các element)').click();

  await expect(
    page.getByRole('heading', { name: 'User Registration' })
  ).toBeVisible();
});