import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';
import { JavaScriptAlertsPage } from '../pages/javascriptAlertsPage.js';

// Constants for expected messages
const ALERT_SUCCESS_MESSAGE = "You successfully clicked an alert";
const CONFIRM_ACCEPT_MESSAGE = "You clicked: Ok";
const CONFIRM_DISMISS_MESSAGE = "You clicked: Cancel";
const PROMPT_TEXT = "Hello World";
const PROMPT_ACCEPTED_RESULT = `You entered: ${PROMPT_TEXT}`;
const PROMPT_DISMISSED_RESULT = "You entered: null";

test.describe('JavaScript Alerts Tests', () => {
  let alertsPage;

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.clickJavascriptAlerts();
    alertsPage = new JavaScriptAlertsPage(page);
  });

  test('Handle JS Alert', async ({ page }) => {
    await alertsPage.triggerAlert();
    await expect(alertsPage.resultText).toContainText(ALERT_SUCCESS_MESSAGE);
  });

  test('Handle JS Confirm - Accept', async ({ page }) => {
    await alertsPage.acceptConfirm();
    await expect(alertsPage.resultText).toContainText(CONFIRM_ACCEPT_MESSAGE);
  });

  test('Handle JS Confirm - Dismiss', async ({ page }) => {
    await alertsPage.dismissConfirm();
    await expect(alertsPage.resultText).toContainText(CONFIRM_DISMISS_MESSAGE);
  });

  test('Accept and dismiss JS Prompt', async () => {
    // Accept prompt with text
    await alertsPage.acceptPrompt(PROMPT_TEXT);
    await expect(alertsPage.resultText).toHaveText(PROMPT_ACCEPTED_RESULT);

    // Dismiss prompt
    await alertsPage.dismissPrompt();
    await expect(alertsPage.resultText).toHaveText(PROMPT_DISMISSED_RESULT);
  });
});
