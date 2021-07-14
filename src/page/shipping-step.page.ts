import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private paymentPage: ElementFinder;

  private paymentMenu: ElementFinder;

  constructor() {
    this.paymentPage = $('#cgv');
    this.paymentMenu = $('#form > p > button > span');
  }

  public async goToPaymentPage(): Promise<void> {
    await this.paymentPage.click();
    await this.paymentMenu.click();
  }
}
