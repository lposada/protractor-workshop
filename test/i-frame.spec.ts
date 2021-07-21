import { browser } from 'protractor';
import {
  FramePage, MainPage,
} from '../src/page';

describe('Enter webpage', () => {
  beforeAll(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('https://demoqa.com/frames');
  });
  describe('Change height and verify it', () => {
    const framePage: FramePage = new FramePage();
    const mainPage: MainPage = new MainPage();
    beforeAll(async () => {
      await mainPage.setFormFrameHeight(600);
    });
    it('then should have the height changed', async () => {
      await expect(mainPage.getFormFrameHeight()).toBe('600');
    });
    describe('Read main page title', () => {
      it('then the title should be Frames', async () => {
        await expect(mainPage.getTitle()).toBe('Frames');
      });
      describe('Change to frame', () => {
        beforeAll(async () => {
          await mainPage.switchToFrame();
        });
        it('then the title should be This is a sample page', async () => {
          await expect(framePage.getTitle()).toBe('This is a sample page');
        });
        describe('Switch to main page', () => {
          beforeAll(async () => {
            await framePage.switchToMainPage();
          });
          it('then the title should be Frames', async () => {
            await expect(mainPage.getTitle()).toBe('Frames');
          });
        });
      });
    });
  });
});
