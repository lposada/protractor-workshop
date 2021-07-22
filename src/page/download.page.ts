/* eslint-disable class-methods-use-this */
import {
  by, browser, ElementFinder, element, ExpectedConditions,
} from 'protractor';
import { DownloadService } from '../service/download.service';

export class DownloadFilePage {
  private downloadButton: ElementFinder;

  private downloadService: DownloadService;

  constructor() {
    this.downloadButton = element(by.id('downloadButton'));

    this.downloadService = new DownloadService();
  }

  public async downloadFile(filename: string): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.downloadButton), 30000);
    await this.downloadService.downloadFile(await this.downloadButton.getAttribute('href'), filename);
  }

  public readFileFromFolder(filename: string): Buffer {
    return this.downloadService.readFileFromTemp(filename);
  }
}
