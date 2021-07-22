import { browser } from 'protractor';
import { DownloadFilePage } from '../src/page';

describe('Enter download page', () => {
  beforeAll(async () => {
    browser.waitForAngularEnabled(false);
    await browser.get('https://demoqa.com/upload-download');
  });
  describe('Download the file', () => {
    const downloadFilePage: DownloadFilePage = new DownloadFilePage();
    const filename = 'download-test.jpg';
    beforeAll(async () => {
      await downloadFilePage.downloadFile(filename);
    });

    it('Then the file should exist in the directory', async () => {
      expect(downloadFilePage.readFileFromFolder(filename).byteLength)
        .toBeGreaterThanOrEqual(4000);
    });
  });
});
