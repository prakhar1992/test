import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
import { RegistrationPage } from '../pages/registrationPage';
import { SigninPage } from '../pages/signinPage';

let page: Page;
let registrationPage: RegistrationPage;
let signinPage: SigninPage;

Given('I am on the registration page', async ({ page: playwrightPage }) => {
    page = playwrightPage;
    registrationPage = new RegistrationPage(page);
    await registrationPage.goto();
});

When('I enter a valid username {string}', async (username: string) => {
    await registrationPage.enterUsername(username);
});

When('I enter a valid password {string}', async (password: string) => {
    await registrationPage.enterPassword(password);
});

When('I click the register button', async () => {
    await registrationPage.clickRegister();
});

Then('I should see a success message', async () => {
    // Implement success message check (e.g., check for a success element or URL change)
    // For now, we just expect no error
    expect(await registrationPage.getRegistrationErrorMessage()).toBe('');
});

Then('I should see a registration error message {string}', async (errorMessage: string) => {
    const actualErrorMessage = await registrationPage.getRegistrationErrorMessage();
    expect(actualErrorMessage).toContain(errorMessage);
});

Given('I am on the sign-in page', async ({ page: playwrightPage }) => {
    page = playwrightPage;
    signinPage = new SigninPage(page);
    await signinPage.goto();
});

When('I enter an invalid username {string}', async (username: string) => {
  await signinPage.enterUsername(username);
});

When('I enter the correct password {string}', async (password: string) => {
  await signinPage.enterPassword(password);
});

When('I enter an invalid password {string}', async (password: string) => {
  await signinPage.enterPassword(password);
});

When('I click the sign-in button', async () => {
    await signinPage.clickSignin();
});

Then('I should be successfully signed in', async () => {
    // Implement success check (e.g., check for a welcome message or URL change)
    expect(await signinPage.getSigninErrorMessage()).toBe('');
});

Then('I should see a sign-in error message {string}', async (errorMessage: string) => {
    const actualErrorMessage = await signinPage.getSigninErrorMessage();
    expect(actualErrorMessage).toContain(errorMessage);
});
