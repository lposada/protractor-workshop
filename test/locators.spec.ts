import { browser } from 'protractor';
import {
  PersonalInformationPage,
} from '../src/page';

describe('Enter webpage', () => {
  beforeAll(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm');
  });
  describe('Fill Form', () => {
    beforeAll(async () => {
      const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

      await personalInformationPage.fillForm({
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        profession: ['Automation Tester'],
        url: './resources/image_testing.jpg',
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands'],
      });
    });
    it('then should have a file uploaded', async () => {
      const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

      await expect(personalInformationPage.getUploadInputLength()).toContain('image_testing.jpg');
    });
    describe('Send Information', () => {
      beforeAll(async () => {
        const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

        await personalInformationPage.submitForm();
      });
      it('then should have form title', async () => {
        const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

        await expect(personalInformationPage.getTitle()).toBe('Selenium - Automation Practice Form');
      });
    });
  });
});
