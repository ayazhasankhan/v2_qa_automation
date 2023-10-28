import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from '../../hooks/pageFixture';
import { LoginPage } from '../../pageObject/pages/LoginPage';
import { BasePage } from '../../pageObject/pages/BasePage';

let loginPage: LoginPage;
let basePage: BasePage;

setDefaultTimeout(60 * 15000);

Given('User go to the application', async function () {
    loginPage = new LoginPage(fixture.page);
    await loginPage.navigateToLoginPage();
    basePage = new BasePage(fixture.page);
})

Given('User enter the username as {string}', async function (username) {
    await loginPage.enterUserName(username);
});

Given('User enter the password as {string}', async function (password) {
    await loginPage.enterPassword(password);
})

When('User click on the login button', async function () {
    await loginPage.clickLoginButton();
});

Then('Login should be success', async function () {
    await basePage.validateText('ProCARE PS');
})
Then('Warning message with the text {string} should be displayed', async function (ErrorMsg) {
    await basePage.validateText(ErrorMsg);
});
Then('Warning message with the text {string} and {string} should be displayed', async function (userNameRequireMessage, passwordNameRequireMessage) {
    await basePage.validateText(userNameRequireMessage);
    await basePage.validateText(passwordNameRequireMessage);
});
