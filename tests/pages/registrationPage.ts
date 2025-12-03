import { Locator, Page } from '@playwright/test';

export class RegistrationPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly registerButton: Locator;
    readonly registrationError: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.registerButton = page.locator('#register-button');
        this.registrationError = page.locator('#registration-error');
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

    async clickRegister() {
        await this.registerButton.click();
    }

    async getRegistrationErrorMessage() {
        return await this.registrationError.textContent();
    }
}
