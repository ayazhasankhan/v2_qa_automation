import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from '../../hooks/pageFixture';
import { LoginPage } from '../../pageObject/pages/LoginPage';
import { SpecialtyPage } from '../../pageObject/pages/SpecialtyPage';
import { HomePage } from '../../pageObject/pages/HomePage';
import { BasePage } from '../../pageObject/pages/BasePage';
import {DtuConfigPage} from "../../pageObject/pages/DtuConfigPage";
import {GroupPage} from "../../pageObject/pages/GroupPage";

let dtuConfigPage: DtuConfigPage;
let homePage: HomePage;
let basePage: BasePage;

setDefaultTimeout(60 * 15000);


Given('Redirect to DTU config screen', async function () {
    homePage = new HomePage(fixture.page);
    basePage = new BasePage(fixture.page);
    dtuConfigPage = new DtuConfigPage(fixture.page);
    await homePage.mouseHoverOnMenu();
    await dtuConfigPage.clickOnAdministraionMenu()
    await dtuConfigPage.clickOnDtuConfigTab()
   // await this.page.url
   // fixture.logger.info('return url - '+ await this.page.url);
})

Given('Redirect to add new dtu screen', async function () {
    await dtuConfigPage.clickOnAddNewDtu();
})

Given('User enter the ETL file name as {string}', async function (etlFileName) {
    await dtuConfigPage.enterEtlFileName(etlFileName);
});

Given('User enter the ETL file description as {string}', async function (etlFileDescription) {
    await dtuConfigPage.enterEtlFileName(etlFileDescription);
});

Given('User select the ETL file table as {string}', async function (etlFileTable) {
    await dtuConfigPage.enterEtlFileName(etlFileTable);
});