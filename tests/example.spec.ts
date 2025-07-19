import { test, expect } from '@playwright/test';

test('acessando pagina do playwright', async ({ page }) => {
  //actions
  await page.goto('https://playwright.dev/');

  const botaoGetStarted = page.getByText('Get started');

  await botaoGetStarted.click();
  
  //expects
  await expect(page).toHaveURL('https://playwright.dev/docs/intro');
})