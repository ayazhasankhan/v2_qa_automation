import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from '../../helper/wrapper/PlaywrightWrappers';
import { basePageLocator } from '../components/BasePageLocator';
import { fixture } from "../../hooks/pageFixture";

export class BasePage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    async applyGridFilter(columnNumber:number,filterText:string){
        await this.page.locator(basePageLocator.gridFilter).nth(columnNumber).click({timeout:30000});
        await this.page.getByRole('textbox').nth(1).fill(filterText,{timeout:30000});
        await this.page.getByRole('button', { name: 'Filter' }).click({timeout:30000});
        fixture.logger.info('applying grid filter for'+columnNumber+'and'+filterText);
    }

    async validateCellText(cellText:any){
        await expect(this.page.getByRole('cell', { name: cellText })).toContainText(cellText,{timeout:30000});
        fixture.logger.info('validate cell text value');
    }

    async clickOnCellText(cellText:any){
        await this.page.getByRole('cell', { name: cellText }).click();
        fixture.logger.info('click on cell');
    }

    async selectRecord(rowNumber:number){
        await this.page.locator(basePageLocator.record).nth(rowNumber).click();
        fixture.logger.info('select'+rowNumber+'record');
    }

    async updateCellText(cellText:any, inputText:string){
        var locator1 ='[value="';
        var locator2 =cellText;
        var locator3 ='"]';
        var locator = locator1+locator2+locator3;
        //console.log(xpath);
        await this.page.getByRole('cell', { name: cellText }).dblclick();
        await this.page.locator(locator).fill(inputText,{timeout:30000});
        fixture.logger.info('update cell text value');
    }

    async applyManageColumnFilter(columnName:string){
        await this.page.locator(basePageLocator.manageColumnFilter).click({timeout:30000});
        await this.page.getByText('SHOW ALL').click();
        await this.page.locator('span').filter({ hasText: 'Clear' }).nth(1).click({timeout:30000});
        await this.page.getByPlaceholder('Search').fill(columnName);
        await this.page.getByText(columnName).click();
        fixture.logger.info('applying column manage filter for'+columnName);
    }

    async validateText(text: string) {
        await expect(this.page.getByText(text).first()).toBeVisible({timeout:30000});
        await expect(this.page.getByText(text).first()).toContainText(text,{timeout:30000});
        fixture.logger.info('validate text'+text);
    }

    async mouseHoverOnQuickLink() {
        await this.page.hover(basePageLocator.quickLink);
        fixture.logger.info('mouse Hover On Quick Link');
        }
    
    async clickOnDeleteRow() {
        await expect(this.page.getByText(basePageLocator.deleteSelectedRows)).toBeVisible({timeout:30000});
        await this.page.getByText(basePageLocator.deleteSelectedRows).click({timeout:30000});
        fixture.logger.info('click On Delete Row');
    }
    
    async clickOnConfirm() {
        await expect(this.page.getByRole('button', { name: basePageLocator.confirmYes })).toBeVisible({timeout:30000});
        await this.page.getByRole('button', { name: basePageLocator.confirmYes }).click({timeout:30000});
        fixture.logger.info('click On Confirm');
    }

    async clickOnUpdate() {
        await expect(this.page.locator(basePageLocator.update)).toBeVisible({timeout:30000});
        await this.page.locator(basePageLocator.update).click({timeout:30000});
        fixture.logger.info('click On Update');
    }

    async clickOnExportToExcel() {
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.getByText(basePageLocator.exportToExcel).click();
        const download = await downloadPromise;
        fixture.logger.info('clickOnExportToExcel');
    }

    async clickOnShowAuditLog() {
        await this.page.getByText(basePageLocator.showAuditLog).click();
        fixture.logger.info('clickOnShowAuditLog');
    }
    
    async clickOnCancel() {
        await this.page.getByLabel(basePageLocator.auditLogsLabel).getByRole('button', { name: basePageLocator.cancel }).click();
        fixture.logger.info('clickOnCancel');
    }

    async fileUpload(path:string) {
        // Start waiting for file chooser before clicking. Note no await.
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.page.getByText('Upload file').click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(path.join(__dirname, 'myfile.pdf'));
        fixture.logger.info('clickOnCancel');
    }

}