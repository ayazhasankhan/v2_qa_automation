import { Page, expect } from "@playwright/test";

export default class PlaywrightWrapper {

    constructor(private page: Page) {
        this.page=page;
    }

    async goto(url: string) {
        await this.page.goto(url, {waitUntil: "domcontentloaded", timeout:120000});
        }

    async validateText(text: string) {
        await expect(this.page.getByText(text).first()).toBeVisible({timeout:30000});
        await expect(this.page.getByText(text).first()).toContainText(text,{timeout:30000});
    }
    async validateUserNamePasswordText(text1: string,text2: string) {
        await expect(this.page.getByText(text1).first()).toBeVisible({timeout:30000});
        await expect(this.page.getByText(text1).first()).toContainText(text1,{timeout:30000});
        await expect(this.page.getByText(text2).first()).toBeVisible({timeout:30000});
        await expect(this.page.getByText(text2).first()).toContainText(text2,{timeout:30000});
    }
}