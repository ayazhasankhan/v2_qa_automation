import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from '../../hooks/pageFixture';
import { LoginPage } from '../../pageObject/pages/LoginPage';

let loginPage: LoginPage;

setDefaultTimeout(60 * 15000);

Given('User go to the application', async function () {
    loginPage = new LoginPage(fixture.page);
    await loginPage.navigateToLoginPage();
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
    await loginPage.validateUserProfileName();
})
Then('Warning message with the text {string} should be displayed', async function (ErrorMsg) {
    await loginPage.validateInvalidCredentialsErrorMessage(ErrorMsg)
});
Then('Warning message with the text {string} and {string} should be displayed', async function (userNameRequireMessage, passwordNameRequireMessage) {
    await loginPage.validateUsernamePasswordRequiredMessage(userNameRequireMessage, passwordNameRequireMessage)
});
