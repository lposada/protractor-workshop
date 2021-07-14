import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private processComplete: ElementFinder;

  constructor() {
    this.processComplete = $('p.cheque-indent strong');
  }

  public async goToProcessComplete(): Promise<string> {
    return this.processComplete.getText();
  }
}
