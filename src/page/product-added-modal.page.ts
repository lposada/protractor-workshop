import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private addedModal: ElementFinder;

  constructor() {
    this.addedModal = $('[style*="display: block;"] .button-container > a');
  }

  public async goToCheckout(): Promise<void> {
    await this.addedModal.click();
  }
}
