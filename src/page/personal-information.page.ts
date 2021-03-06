/* eslint-disable class-methods-use-this */
import {
  $, $$, by, browser, ElementFinder, element, ExpectedConditions,
} from 'protractor';

import * as remote from 'selenium-webdriver/remote';

import { cwd } from 'process';

const path = require('path');

export class PersonalInformationPage {
  private firstNameInput: ElementFinder;

  private lastNameInput: ElementFinder;

  private uploadFile: ElementFinder;

  private submitButton: ElementFinder;

  constructor() {
    this.firstNameInput = element(by.name('firstname'));
    this.lastNameInput = element(by.name('lastname'));
    this.uploadFile = element(by.name('photo'));
    this.submitButton = element(by.name('submit'));
  }

  public async getTitle() {
    return $$('h1').first().getText();
  }

  private async fillName(firstName: string, lastName: string): Promise<void> {
    await this.firstNameInput.sendKeys(firstName);
    await this.lastNameInput.sendKeys(lastName);
  }

  private async fillSex(sex: string): Promise<void> {
    await $(`[name="sex"][value="${sex}"]`).click();
  }

  private async fillExperience(experience: number): Promise<void> {
    await $(`[name="exp"][value="${experience}"]`).click();
  }

  private async fillProfession(profession: string[]): Promise<void> {
    profession.forEach(async (single_profession) => {
      await $(`[name="profession"][value="${single_profession}"]`).click();
    });
  }

  private async fillTools(tools: string[]): Promise<void> {
    tools.forEach(async (tool) => {
      await $(`[name="tool"][value="${tool}"]`).click();
    });
  }

  private async fillContinent(continent: string): Promise<void> {
    await element(by.name('continents')).element(by.cssContainingText('option', continent)).click();
  }

  private async fillCommands(commands: string[]): Promise<void> {
    commands.forEach(async (command) => {
      await element(by.name('selenium_commands')).element(by.cssContainingText('option', command)).click();
    });
  }

  private async UploadFile(url: string): Promise<void> {
    const fpath = path.resolve(cwd(), url);
    await browser.setFileDetector(new remote.FileDetector());
    await this.uploadFile.sendKeys(fpath);
    await browser.setFileDetector(undefined);
  }

  public async getUploadInputLength() {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.uploadFile), 3000);
    return this.uploadFile.getAttribute('value');
  }

  public async fillForm(data: { firstName: string, lastName: string, sex: string,
    experience: number, profession: string[], url: string, tools: string[], continent: string,
    commands: string[] }): Promise<void> {
    await this.fillName(data.firstName, data.lastName);
    await this.fillSex(data.sex);
    await this.fillExperience(data.experience);
    await this.fillProfession(data.profession);
    if (data.url) {
      await this.UploadFile(data.url);
    }
    await this.fillTools(data.tools);
    await this.fillContinent(data.continent);
    await this.fillCommands(data.commands);
  }

  public async submitForm() {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.submitButton), 30000);
    await this.submitButton.click();
    await browser.switchTo().alert().accept();
  }
}
