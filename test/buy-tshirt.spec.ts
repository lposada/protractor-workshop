import { browser } from 'protractor';
import {
  MenuContentPage, ProductListPage, ProductAddedModalPage, SummaryStepPage, SignInStepPage,
  AddressStepPage, ShippingStepPage, PaymentStepPage, BankPaymentPage, OrderSummaryPage,
} from '../src/page';

describe('Enter webpage', () => {
  beforeAll(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://automationpractice.com/');
  });
  describe('Buy a tshirt', () => {
    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productAddedModal: ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStepPage: SummaryStepPage = new SummaryStepPage();

      await menuContentPage.goToTShirtMenu();
      await productListPage.goToaddProductMenu();
      await productAddedModal.goToCheckout();
      await summaryStepPage.goTosignIn();
    });
    describe('Login', () => {
      beforeAll(async () => {
        const signInStepPage: SignInStepPage = new SignInStepPage();
        await signInStepPage.SignIn('aperdomobo@gmail.com', 'WorkshopProtractor');
      });
      describe('Select Address', () => {
        beforeAll(async () => {
          const addressStepPage: AddressStepPage = new AddressStepPage();
          const shippingStepPage: ShippingStepPage = new ShippingStepPage();

          await addressStepPage.goToShippingMenu();
          await shippingStepPage.goToPaymentPage();
        });
        describe('Bank Payment', () => {
          beforeAll(async () => {
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

            await paymentStepPage.goToBankPaymentMenu();
            await bankPaymentPage.goToOrderSummaryMenu();
          });
          it('then should pay the tshirt', async () => {
            const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

            await expect(orderSummaryPage.goToProcessComplete()).toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
