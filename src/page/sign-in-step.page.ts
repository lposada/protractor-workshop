import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private signIn: ElementFinder;

  private signInEmail: ElementFinder;

  private signInPassword: ElementFinder;

  constructor() {
    this.signInEmail = $('#email');
    this.signInPassword = $('#passwd');
    this.signIn = $('#SubmitLogin > span');
  }

  public async SignIn(email, password): Promise<void> {
    await this.signInEmail.sendKeys(email);
    await this.signInPassword.sendKeys(password);
    await this.signIn.click();
  }
}
