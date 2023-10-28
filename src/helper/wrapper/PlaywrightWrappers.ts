import { Page, expect } from "@playwright/test";

export default class PlaywrightWrapper {

    constructor(private page: Page) {
        this.page=page;
    }

    async goto(url: string) {
        await this.page.goto(url, {waitUntil: "domcontentloaded", timeout:120000});
        }
}