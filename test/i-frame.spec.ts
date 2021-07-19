import { browser } from 'protractor';
import {
  FramePage,
} from '../src/page';

describe('Enter webpage', () => {
  beforeAll(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('https://demoqa.com/frames');
  });
  describe('Change height and verify it', () => {
    const framePage: FramePage = new FramePage();
    beforeAll(async () => {
      await framePage.setFormFrameHeight(600);
    });
    it('then should have the height changed', async () => {
      await expect(framePage.getFormFrameHeight()).toBe('600');
    });
    describe('Switch to main page', () => {
      beforeAll(async () => {
        await framePage.switchtoMain();
      });
      it('then the title should be Frames', async () => {
        await expect(framePage.getTitle()).toBe('Frames');
      });
      describe('Change to frame', () => {
        beforeAll(async () => {
          await framePage.switchtoFrame();
        });
        it('then the title should be This is a sample page', async () => {
          await expect(framePage.getTitle()).toBe('This is a sample page');
        });
        describe('Switch to main page', () => {
          beforeAll(async () => {
            await framePage.switchtoMain();
          });
          it('then the title should be Frames', async () => {
            await expect(framePage.getTitle()).toBe('Frames');
          });
        });
      });
    });
  });
});
