import { expect, Page } from "@playwright/test";
import { dtuConfigPageLocator } from '../components/DtuConfigPageLocator';
import PlaywrightWrapper from '../../helper/wrapper/PlaywrightWrappers';
import { fixture } from "../../hooks/pageFixture";
import {groupPageLocator} from "../components/GroupPageLocator";
import {loginPageLocator} from "../components/LoginPageLocator";

export class DtuConfigPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    async clickOnAdministraionMenu() {
        //  await expect(this.page.locator(dtuConfigPageLocator.dtuConfigTab)).toBeVisible({timeout:30000});
        await this.page.locator(dtuConfigPageLocator.administrationMenu).click({timeout:30000});
        fixture.logger.info('click on ADMINISTRATION menu');
    }
    async clickOnDtuConfigTab() {
      //  await expect(this.page.locator(dtuConfigPageLocator.dtuConfigTab)).toBeVisible({timeout:30000});
        await this.page.locator(dtuConfigPageLocator.dtuConfigTab).click({timeout:30000});
        fixture.logger.info('click on specialty');
    }

    async clickOnAddNewDtu() {
        await this.page.locator(dtuConfigPageLocator.addNewDtu).click({timeout:30000});
        fixture.logger.info('click On Add New DTU');
    }

    async enterEtlFileName(userNameInput= 'ps@deborah.org') {
        await this.page.locator(dtuConfigPageLocator.etlFileName).fill(userNameInput);
        fixture.logger.info('enter file name');
    }

    async enterEtlFileDescription(userNameInput= 'ps@deborah.org') {
        await this.page.locator(dtuConfigPageLocator.etlFileDescription).fill(userNameInput);
        fixture.logger.info('enter etl file description');
    }

    async selectFileTable(userNameInput= 'ps@deborah.org') {
        await this.page.locator(dtuConfigPageLocator.etlFileTable).fill(userNameInput);
        fixture.logger.info('select etl file table');
    }
}