import {
  $, ElementFinder, ExpectedConditions, browser
} from 'protractor';

export class ProductAddedModalPage {
  private addedModal: ElementFinder;

  constructor() {
    this.addedModal = $('.button-container [title="Proceed to checkout"]');
  }

  public async goToCheckout(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addedModal), 30000);
    await this.addedModal.click();
  }
}
