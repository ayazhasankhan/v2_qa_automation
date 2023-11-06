import { expect, Page } from "@playwright/test";
import { groupPageLocator } from '../components/GroupPageLocator';
import PlaywrightWrapper from '../../helper/wrapper/PlaywrightWrappers';
import { fixture } from "../../hooks/pageFixture";
//import { basePageLocator } from "../components/BasePageLocator";

export class GroupPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    async clickOnGroupTab() {
        await this.page.locator(groupPageLocator.groupTab).click({timeout:30000});
        fixture.logger.info('click on Group');
      }
    
      async clickOnAddNewGroup() {
        await this.page.locator(groupPageLocator.addNewGroup).click({timeout:30000});
        fixture.logger.info('click On Add New Group');
      }
    
      async enterGroupCode(groupCodeInput: string) {
        await this.page.locator(groupPageLocator.groupCode).fill(groupCodeInput,{timeout:30000});
        fixture.logger.info('enter group Code');
      }

      async enterGroupName(groupNameInput: string) {
        await this.page.locator(groupPageLocator.groupName).fill(groupNameInput,{timeout:30000});
        fixture.logger.info('enter group Name');
      }
    
      async enterGroupDescription(groupDescInput: string) {
        await this.page.locator(groupPageLocator.groupDescription).fill(groupDescInput,{timeout:30000});
        fixture.logger.info('enter group Description');
      }
    
      async enterGroupRegionName(departmentInput: string) {
        await this.page.locator(groupPageLocator.groupRegionName).fill(departmentInput,{timeout:30000});
        fixture.logger.info('enter group Region Name');
      }

      async enterGroupFacility(facilityInput: string) {
        await this.page.locator(groupPageLocator.groupFacility).fill(facilityInput,{timeout:30000});
        fixture.logger.info('enter group facility');
      }

      async enterGroupCostCentre(costCentreInput: string) {
        await this.page.locator(groupPageLocator.groupCostCentre).fill(costCentreInput,{timeout:30000});
        fixture.logger.info('enter group cost centre');
      }
      
      async clickOnSave() {
      //  await expect(this.page.getByRole('button',{name:basePageLocator.save}).nth(1)).toBeVisible({timeout:30000});
      //  await this.page.getByRole('button',{name:basePageLocator.save}).nth(1).click({timeout:30000});
        fixture.logger.info('click On Save');
      }
    }