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
    async enterUserName(userNameInput: string) {
        await this.page.locator(loginPageLocator.userName).fill(userNameInput);
        fixture.logger.info('enter userName');
    }
    async enterPassword(passwordInput: string) {
        await this.page.locator(loginPageLocator.password).fill(passwordInput);
        fixture.logger.info('enter password');
    }
    async clickLoginButton() {
        await this.page.click(loginPageLocator.loginBtn);
        fixture.logger.info('click on login button');
    }
    async validateUserProfileName() {
        await this.base.validateText('ProCARE PS');
        fixture.logger.info('validate userProfile Name');
    }
    /**
     * Below function will validate error message
     * @param msg 
     */
    async validateInvalidCredentialsErrorMessage(msg: string) {
        await this.base.validateText(msg);
        fixture.logger.info('Error message validated successfully');
    }
    /**
     * Below function will validate error message
     * @param msg 
     */
    async validateUsernamePasswordRequiredMessage(username: string,passwrd: string) {
        await this.base.validateUserNamePasswordText(username,passwrd);
        fixture.logger.info('Blank field required message validated successfully');
    }
}