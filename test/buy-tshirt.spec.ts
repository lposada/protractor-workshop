import { browser } from 'protractor';
import {
  MenuContentPage, ProductListPage, ProductAddedModalPage, SummaryStepPage, SignInStepPage,
  AddressStepPage, ShippingStepPage, PaymentStepPage, BankPaymentPage, OrderSummaryPage,
} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModal: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('then should be bought a t-shirt', async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await (browser.sleep(8000));
    await productListPage.goToaddProductMenu();
    await (browser.sleep(8000));
    await productAddedModal.goToCheckout();
    await (browser.sleep(6000));
    await summaryStepPage.goTosignIn();
    await (browser.sleep(6000));

    await signInStepPage.SignIn('aperdomobo@gmail.com', 'WorkshopProtractor');
    await (browser.sleep(6000));

    await addressStepPage.goToShippingMenu();
    await (browser.sleep(6000));

    await shippingStepPage.goToPaymentPage();
    await (browser.sleep(8000));

    await paymentStepPage.goToBankPaymentMenu();
    await (browser.sleep(6000));
    await bankPaymentPage.goToOrderSummaryMenu();
    await (browser.sleep(6000));

    await expect(orderSummaryPage.goToProcessComplete()).toBe('Your order on My Store is complete.');
  });
});
