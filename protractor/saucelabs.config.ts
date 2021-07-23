import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

const firefoxConfig = {
  browserName: 'firefox',
  platform: 'linux',
  name: 'firefox-tests',
  shardTestFiles: true,
  maxInstances: 1,
};

const chromeConfig = {
  browserName: 'chrome',
  name: 'chrome-tests',
  shardTestFiles: true,
  maxInstances: 1,
};

const multiCapabilities = [chromeConfig, firefoxConfig];

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/**.spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  getPageTimeout: 3000,
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 240000,
  },
  onPrepare: () => {
    reporter();
    browser.manage().timeouts().implicitlyWait(0);
  },
  multiCapabilities,
};
