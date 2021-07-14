import {
  $, ElementFinder, ExpectedConditions, browser,
} from 'protractor';

export class ProductListPage {
  private addProductMenu: ElementFinder;

  constructor() {
    this.addProductMenu = $('#center_column [title="Add to cart"]');
  }

  public async goToaddProductMenu(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addProductMenu), 30000);
    await this.addProductMenu.click();
  }
}
