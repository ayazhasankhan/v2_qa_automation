import { expect, Page } from "@playwright/test";
import { loginPageLocator } from '../components/LoginPageLocator';
import PlaywrightWrapper from '../../helper/wrapper/PlaywrightWrappers';
import { fixture } from "../../hooks/pageFixture";

export class LoginPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    async navigateToLoginPage() {
        await this.base.goto(process.env.BASEURL);
        fixture.logger.info('Go to the application');
    }

    async enterUserName(userNameInput= 'ps@deborah.org') {
        await this.page.locator(loginPageLocator.userName).fill(userNameInput);
        fixture.logger.info('enter userName');
    }

    async enterPassword(passwordInput= 'BigC@ctus2020') {
        await this.page.locator(loginPageLocator.password).fill(passwordInput);
        fixture.logger.info('enter password');
    }

    async clickLoginButton() {
        await this.page.locator(loginPageLocator.loginBtn).click();
        fixture.logger.info('click on login button');
    } 
}