/* eslint-disable class-methods-use-this */
import {
  browser, element, by, ElementFinder,
} from 'protractor';

export class FramePage {
  private titleLabel: ElementFinder;

  private titleLabel: ElementFinder;

  constructor() {
    this.titleLabel = element(by.id('sampleHeading'));
  }

  public async switchToMainPage(): Promise<void> {
    await browser.switchTo().defaultContent();
  }

  public async getTitle(): Promise<string> {
    return this.titleLabel.getText();
  }
}
