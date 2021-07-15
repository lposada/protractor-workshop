import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private shippingMenu: ElementFinder;

  constructor() {
    this.shippingMenu = $('button[name="processAddress"]');
  }

  public async goToShippingMenu(): Promise<void> {
    await this.shippingMenu.click();
  }
}
