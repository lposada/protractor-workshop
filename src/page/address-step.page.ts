import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private shippingMenu: ElementFinder;

  constructor() {
    this.shippingMenu = $('#center_column > form > p > button > span');
  }

  public async goToShippingMenu(): Promise<void> {
    await this.shippingMenu.click();
  }
}
