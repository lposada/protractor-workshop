import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private addProductMenu: ElementFinder;

  constructor() {
    this.addProductMenu = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToaddProductMenu(): Promise<void> {
    await this.addProductMenu.click();
  }
}
