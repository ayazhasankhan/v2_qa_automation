import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from '../../helper/wrapper/PlaywrightWrappers';
import { homePageLocator } from '../components/HomePageLocator';
import { fixture } from "../../hooks/pageFixture";

export class HomePage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    async mouseHoverOnMenu() {
        await this.page.hover(homePageLocator.menu);
        fixture.logger.info('mouse hover on menu');
        }
}