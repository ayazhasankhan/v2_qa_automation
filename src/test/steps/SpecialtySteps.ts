import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from '../../hooks/pageFixture';
import { LoginPage } from '../../pageObject/pages/LoginPage';
import { SpecialtyPage } from '../../pageObject/pages/SpecialtyPage';
import { HomePage } from '../../pageObject/pages/HomePage';
import { BasePage } from '../../pageObject/pages/BasePage';

let loginPage: LoginPage;
let specialtyPage: SpecialtyPage;
let homePage: HomePage;
let basePage: BasePage;
let date = new Date().toJSON();
let specialtyName='PlaywrightTestSpecialtyName'+date;
let specialtyDesc='PlaywrightTestSpecialtyDesc'+date;
let department='PlaywrightTestDepartment'+date;

setDefaultTimeout(60 * 15000);

Given('User login to the application', async function () {
  loginPage = new LoginPage(fixture.page);
  specialtyPage = new SpecialtyPage(fixture.page);
  homePage = new HomePage(fixture.page);
  basePage = new BasePage(fixture.page);
  await loginPage.navigateToLoginPage();
  await loginPage.enterUserName();
  await loginPage.enterPassword();
  await loginPage.clickLoginButton();
  await basePage.validateText('ProCARE PS');
})

Given('Redirect to Specialty screen', async function () {
  await homePage.mouseHoverOnMenu();
  await specialtyPage.clickOnSpecialityTab();
})

When('Redirect to add Specialty screen', async function () {
  await specialtyPage.clickOnAddNewSpecialty();
})

When('Enter the proper data Specialty Name, Description and Region Name', async function () {
  await specialtyPage.enterSpecialityName(specialtyName);
  await specialtyPage.enterSpecialityDescription(specialtyDesc);
  await specialtyPage.enterSpecialityRegionName(department);
})

When('Click on save button', async function () {
  await basePage.clickOnSave();
})

Then('Verify specialty is created', async function () {
  await basePage.validateText(specialtyName);
})

When('Apply grid filter on specialty name column', async function () {
  await basePage.applyGridFilterAndVerify(0,specialtyName);
})
  
Then('Validate filter is applied properly on specialty name column', async function (){
  await basePage.validateCellText(specialtyName);
})
  
When('Show only column {string} by filtering', async function (columnName) {
  await basePage.applyManageColumnFilter(columnName);
})
  
Then('Validate enabled column {string} is visible', async function (columnName) {
  await basePage.validateText(columnName);
})

Then('Open the record in edit mode at Specialty screen', async function () {
  await basePage.clickOnCellText(specialtyName);
})

Then('Update the Specialty Name, Description and Region Name', async function () {
  await basePage.updateCellText(specialtyName, specialtyName+'updated');
  await basePage.updateCellText(specialtyDesc, specialtyDesc+'updated');
  await basePage.updateCellText(department, department+'updated');
})

Then('Click on update button', async function () {
  await basePage.clickOnUpdate();
})

Then('Verify specialty is updated', async function () {
  await basePage.validateText(specialtyName+'updated');
})

Then('Select single record', async function () {

})

Then('Mouse hover on quick link', async function () {
  await basePage.mouseHoverOnQuickLink();
})

Then('Delete Selected Rows', async function () {
  await basePage.mouseHoverOnQuickLink();
  await basePage.clickOnDeleteRow();
  await basePage.clickOnConfirm();
})

When('Mouse hover On Quick Link', async function() {
  await basePage.mouseHoverOnQuickLink();
})

Then('Click on Export to Excel', async function() {
  await basePage.clickOnExportToExcel();
})

When('Select first record in specialty grid', async function() {
  await basePage.selectRecord(0);
})

Then('Click on Show Audit Log', async function() {
  await basePage.clickOnShowAuditLog();
})

When('Apply grid filter on audit log for search text {string}', async function(searchText) {
  await basePage.applyGridFilterAndVerify(4,searchText);
})

Then('Validate grid filter is applied properly for text {string}', async function(searchText) {
  await basePage.validateCellText(searchText);
})

Then('Click on cancel', async function() {
  await basePage.clickOnCancel();
})

When('Click on upload specialty icon', async function() {
  await basePage.clickOnUploadSpecialtyIcon();
})

When('Upload file {string}', async function(fileName) {
  await basePage.fileUpload(fileName);
})

When('Click on upload', async function() {
  await basePage.clickOnUpload();
})

Then('Specialty should be uploaded successfully', async function() {
  // Write code here that turns the phrase above into concrete actions
})

Then('Verify Row is deleted', async function() {
  // Write code here that turns the phrase above into concrete actions
})
