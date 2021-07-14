import {
  $, ElementFinder, ExpectedConditions, browser,
} from 'protractor';

export class ProductListPage {
  private addProductMenu: ElementFinder;

  constructor() {
    this.addProductMenu = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToaddProductMenu(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addProductMenu), 30000);
    await this.addProductMenu.click();
  }
}
