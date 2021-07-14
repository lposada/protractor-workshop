import { browser } from 'protractor';

describe('Given a SDET learning protractor', () => {
  describe('when open Google Page', () => {
    it('then should have a title', async () => {
      await browser.driver.get('http://www.google.com');
      expect(await browser.driver.getTitle()).toEqual('Google');
    });
  });
});
