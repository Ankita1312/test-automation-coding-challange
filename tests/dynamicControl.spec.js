import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';
import { DynamicControlsPage } from '../pages/dynamicControlPage.js';

test.describe('Dynamic Controls', () => {
  test('Checkbox can be removed and added', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.clickDynamicControls();
    const dynamic = new DynamicControlsPage(page);

    // Remove checkbox
    await dynamic.removeCheckbox();
    await expect(dynamic.checkbox).not.toBeVisible();

    // Add checkbox back
    await dynamic.addCheckbox();
    await expect(dynamic.checkbox).toBeVisible();
  });

  test('Input can be enabled and disabled', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.clickDynamicControls();
    const dynamic = new DynamicControlsPage(page);

    // Enable input
    await dynamic.enableInput();
    await expect(dynamic.input).toBeEnabled();

    await dynamic.input.fill('Testing');
    await expect(dynamic.input).toHaveValue('Testing');

    // Disable input
    await dynamic.disableInput();
    await expect(dynamic.input).toBeDisabled();
  });
});
