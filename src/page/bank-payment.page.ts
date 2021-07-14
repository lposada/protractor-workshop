import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private orderSummaryMenu: ElementFinder;

  constructor() {
    this.orderSummaryMenu = $('button.button-medium');
  }

  public async goToOrderSummaryMenu(): Promise<void> {
    await this.orderSummaryMenu.click();
  }
}
