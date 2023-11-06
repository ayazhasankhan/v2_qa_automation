import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from '../../hooks/pageFixture';
import { LoginPage } from '../../pageObject/pages/LoginPage';
import { GroupPage } from '../../pageObject/pages/GroupPage';
import { HomePage } from '../../pageObject/pages/HomePage';
import { BasePage } from '../../pageObject/pages/BasePage';

let loginPage: LoginPage;
let groupPage: GroupPage;
let homePage: HomePage;
let basePage: BasePage;
let date = new Date().toJSON();
let groupCode ='PlaywrightTestGroupCode'+date;
let groupName='PlaywrightTestGroupName'+date;
let groupDesc='PlaywrightTestGroupDesc'+date;
let region='PlaywrightTestRegion'+date;
let facility='PlaywrightTestFacility'+date;
let costCenter='PlaywrightTestCostCentre'+date;

setDefaultTimeout(60 * 15000);

Given('Redirect to Group screen', async function () {
  homePage = new HomePage(fixture.page);
  basePage = new BasePage(fixture.page);
  groupPage = new GroupPage(fixture.page);
  await homePage.mouseHoverOnMenu();
  await groupPage.clickOnGroupTab();
})

Given('Redirect to add Group screen', async function () {
  await groupPage.clickOnAddNewGroup();
})

When('Enter the proper data Group Code, Group Name, Description, Region, Facility and Cost Center', async function () {
  await groupPage.enterGroupCode(groupCode);
  await groupPage.enterGroupName(groupName);
  await groupPage.enterGroupDescription(groupDesc);
  await groupPage.enterGroupRegionName(region);
  await groupPage.enterGroupFacility(facility);
  await groupPage.enterGroupCostCentre(costCenter);
})

Then('verify group is created', async function () {
  await basePage.validateText(groupName);
})

When('Apply grid filter on group name column', async function () {
  await basePage.applyGridFilterAndVerify(1,groupName);
})

Then('Open the record in edit mode at Group screen', async function () {
  await basePage.clickOnCellText(groupName);
})

Then('Update the Group Code, Group Name, Description, Region, Facility and Cost Center', async function () {
  await basePage.updateCellText(groupCode, groupCode+'updated');
  await basePage.updateCellText(groupName, groupName+'updated');
  await basePage.updateCellText(groupDesc, groupDesc+'updated');
  await basePage.updateCellText(region, region+'updated');
  await basePage.updateCellText(facility, facility+'updated');
  await basePage.updateCellText(costCenter, costCenter+'updated');
})

Then('Verify group is updated', async function () {
  await basePage.validateText(groupName+'updated');
})




