import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';
import { LoginPage } from '../pages/loginPage.js';

const VALID_USER = 'tomsmith';
const VALID_PASS = 'SuperSecretPassword!';
const INVALID_USER = 'invalid';
const INVALID_PASS = 'invalid';
const LOGIN_SUCCESS_MESSAGE = 'You logged into a secure area!';
const INVALID_USERNAME_MESSAGE = 'Your username is invalid!';
const INVALID_PASSWORD_MESSAGE = 'Your password is invalid!';
const LOGOUT_SUCCESS_MESSAGE = 'You logged out of the secure area!';


test.describe('Login Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.clicklogin();
    loginPage = new LoginPage(page);
  });

  test('Login with valid credentials', async () => {
    await loginPage.login(VALID_USER, VALID_PASS);
    await expect(loginPage.flashMessage).toContainText(LOGIN_SUCCESS_MESSAGE);
    await loginPage.logout();
    await expect(loginPage.flashMessage).toContainText(LOGOUT_SUCCESS_MESSAGE);
  });

  test('Login with invalid credentials', async () => {
    await loginPage.login(INVALID_USER, INVALID_PASS);
    await expect(loginPage.flashMessage).toContainText(INVALID_USERNAME_MESSAGE);
  });

  test('Login with empty credentials', async () => {
    await loginPage.login('', '');
    await expect(loginPage.flashMessage).toContainText(INVALID_USERNAME_MESSAGE);
  });

  test('Login with only username', async () => {
    await loginPage.login(VALID_USER, '');
    await expect(loginPage.flashMessage).toContainText(INVALID_PASSWORD_MESSAGE);
  });

  test('Login with only password', async () => {
    await loginPage.login('', VALID_PASS);
    await expect(loginPage.flashMessage).toContainText(INVALID_USERNAME_MESSAGE);
  });
});
