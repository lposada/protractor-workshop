import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private signIn: ElementFinder;

  constructor() {
    this.signIn = $('.cart_navigation .button');
  }

  public async goTosignIn(): Promise<void> {
    await this.signIn.click();
  }
}
