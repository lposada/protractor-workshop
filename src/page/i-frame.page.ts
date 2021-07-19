import { browser, by, element, ElementFinder, promise } from 'protractor';

export class FramePage {
  private iframe1: ElementFinder;

  private titleLabel: ElementFinder;

  constructor() {
    this.iframe1 = element(by.id('frame1'));
    this.titleLabel = element(by.css('.main-header'));
  }

  public async switchtoMain(): Promise<void> {
    this.titleLabel = element(by.css('.main-header'));
    await browser.switchTo().defaultContent();
  }

  public async switchtoFrame(): Promise<void> {
    this.titleLabel = element(by.id('sampleHeading'));
    await browser.switchTo().frame(this.iframe1.getWebElement());
  }

  public async getTitle(): Promise<string> {
    return this.titleLabel.getText();
  }

  public async getFormFrameHeight(): Promise<string> {
    return this.iframe1.getAttribute('height');
  }

  public setFormFrameHeight(height: number): promise.Promise<void> {
    return browser.executeScript(`arguments[0].height = ${height};`, this.iframe1);
  }
}
