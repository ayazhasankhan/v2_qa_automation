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
  });

  Given('Redirect to Specialty screen', async function () {
    await homePage.mouseHoverOnMenu();
    await specialtyPage.clickOnSpecialityTab();
  });

  When('Redirect to add Specialty screen', async function () {
    await specialtyPage.clickOnAddNewSpecialty();
  });

  When('Enter the proper data Specialty Name, Description and Region Name', async function () {
    await specialtyPage.enterSpecialityName(specialtyName);
    await specialtyPage.enterSpecialityDescription(specialtyDesc);
    await specialtyPage.enterSpecialityRegionName(department);
  });

  Then('Click on save button and verify', async function () {
    await specialtyPage.clickOnSave();
    await basePage.validateText(specialtyName);
  });

  When('Apply grid filter on specialty name column', async function () {
    await basePage.applyGridFilter(0,specialtyName);
  })
  
  Then('Validate filter is applied properly', async function (){
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
  });


  Then('Update the Specialty Name, Description and Region Name', async function () {
    await basePage.updateCellText(specialtyName, specialtyName+'updated');
    await basePage.updateCellText(specialtyDesc, specialtyDesc+'updated');
    await basePage.updateCellText(department, department+'updated');
  });


  Then('Click on update button and verify', async function () {
    await basePage.clickOnUpdate();
    await basePage.validateText(specialtyName+'updated');
  });


  Then('Perform the single record delete functionality and verified it is working or not at Specialty screen', async function () {
    await basePage.mouseHoverOnQuickLink();
    await basePage.clickOnDeleteRow();
    await basePage.clickOnConfirm();
  });

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

Then('Click on cancel', async function() {
  await basePage.clickOnCancel();
})


