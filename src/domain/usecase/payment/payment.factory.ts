import {
  BrainTreePayment,
  PayPalPayment,
  StripePayment,
} from "./payment.method";

export enum PaymentProvider {
  PAYPAL = "paypal",
  STRIPE = "stripe",
  BRAINTREE = "braintree",
}

export class PaymentFactory {
  create(provider: PaymentProvider) {
    if (provider === PaymentProvider.PAYPAL) {
      return new PayPalPayment();
    } else if (provider === PaymentProvider.STRIPE) {
      return new StripePayment();
    } else if (provider === PaymentProvider.BRAINTREE) {
      return new BrainTreePayment();
    }
    throw new Error("Invalid payment method");
  }
}
