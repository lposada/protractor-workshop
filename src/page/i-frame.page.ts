import { browser, by, element, ElementFinder, promise } from 'protractor';

export class FramePage {
  private iframe1: ElementFinder;

  constructor() {
    this.iframe1 = element(by.id('frame1'));
  }

  public async getFormFrameHeight(): Promise<string> {
    return this.iframe1.getAttribute('height');
  }

  public setFormFrameHeight(height: number): promise.Promise<void> {
    return browser.executeScript(`arguments[0].height = ${height};`, this.iframe1);
  }
}
