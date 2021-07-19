import { browser } from 'protractor';
import {
  FramePage,
} from '../src/page';

describe('Enter webpage', () => {
  beforeAll(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('https://demoqa.com/frames');
  });
  describe('change height', () => {
    beforeAll(async () => {
      const framePage: FramePage = new FramePage();

      await framePage.setFormFrameHeight(600);
    });
    it('then should have the height changed', async () => {
      const framePage: FramePage = new FramePage();
      await expect(framePage.getFormFrameHeight()).toBe('600');
    });
  });
});
