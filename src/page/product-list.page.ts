import {
  $, $$, ElementArrayFinder, ExpectedConditions, browser, ElementFinder,
} from 'protractor';

export class ProductListPage {
  private product_list: ElementArrayFinder;

  private addProductMenu: ElementFinder;

  constructor() {
    this.product_list = $$('ul.product_list');
    this.addProductMenu = $('[id="add_to_cart"]');
  }

  private findByProduct(productName: string): ElementFinder {
    return this.product_list.filter((product: ElementFinder) => product.$('.product-name').getText().then((name: string) => name.includes(productName))).first();
  }

  public async selectProduct(productName: string): Promise<void> {
    const selectedProduct = this.findByProduct(productName);
    await browser.wait(ExpectedConditions.elementToBeClickable(selectedProduct.$('img')), 30000);
    await selectedProduct.$('img').click();
  }

  public async addProduct(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addProductMenu), 30000);
    await this.addProductMenu.click();
  }
}
