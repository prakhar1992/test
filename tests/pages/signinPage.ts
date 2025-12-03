import { Locator, Page } from '@playwright/test';

export class SigninPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly signinButton: Locator;
    readonly signinError: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#signin-username');
        this.passwordInput = page.locator('#signin-password');
        this.signinButton = page.locator('#signin-button');
        this.signinError = page.locator('#signin-error');
    }

    async goto() {
        await this.page.goto('/');
    }

    async enterUsername(username: string) {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickSignin() {
        await this.signinButton.click();
    }

    async getSigninErrorMessage() {
        return await this.signinError.textContent();
    }
}
