import { expect, Page } from "@playwright/test";
import { specialtyPageLocator } from '../components/SpecialtyPageLocator';
import PlaywrightWrapper from '../../helper/wrapper/PlaywrightWrappers';
import { fixture } from "../../hooks/pageFixture";

export class SpecialtyPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    async clickOnSpecialityTab() {
        await expect(this.page.locator(specialtyPageLocator.specialityTab)).toBeVisible({timeout:30000});
        await this.page.locator(specialtyPageLocator.specialityTab).click({timeout:30000});
        fixture.logger.info('click on specialty');
      }
    
      async clickOnAddNewSpecialty() {
        await expect(this.page.locator(specialtyPageLocator.addNewSpecialty)).toBeVisible({timeout:30000});
        await this.page.locator(specialtyPageLocator.addNewSpecialty).click({timeout:30000});
        fixture.logger.info('clickOnAddNewSpecialty');
      }
    
      async enterSpecialityName(specialityNameInput: string) {
        await expect(this.page.locator(specialtyPageLocator.specialityName)).toBeVisible({timeout:30000});
        await this.page.locator(specialtyPageLocator.specialityName).fill(specialityNameInput,{timeout:30000});
        fixture.logger.info('enterSpecialityName');
      }
    
      async enterSpecialityDescription(specialtyDesc: string) {
        await expect(this.page.locator(specialtyPageLocator.specialityDescription)).toBeVisible({timeout:30000});
        await this.page.locator(specialtyPageLocator.specialityDescription).fill(specialtyDesc,{timeout:30000});
        fixture.logger.info('enterSpecialityDescription');
      }
    
      async enterSpecialityRegionName(department: string) {
        await expect(this.page.locator(specialtyPageLocator.specialityRegionName)).toBeVisible({timeout:30000});
        await this.page.locator(specialtyPageLocator.specialityRegionName).fill(department,{timeout:30000});
        fixture.logger.info('enterSpecialityRegionName');
      }
      
      async clickOnSave() {
        await expect(this.page.getByRole('button',{name:specialtyPageLocator.save}).nth(1)).toBeVisible({timeout:30000});
        await this.page.getByRole('button',{name:specialtyPageLocator.save}).nth(1).click({timeout:30000});
        fixture.logger.info('clickOnSave');
      }

    }