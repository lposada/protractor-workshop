import {
  $, ElementFinder, ExpectedConditions, browser
} from 'protractor';

export class ProductAddedModalPage {
  private addedModal: ElementFinder;

  constructor() {
    this.addedModal = $('[style*="display: block;"] .button-container > a');
  }

  public async goToCheckout(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addedModal), 30000);
    await this.addedModal.click();
  }
}
