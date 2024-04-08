import { BrainTreeRepository } from "../../../infrastructure/repositories/braintree/braintree.repository";
import { PayPalRepository } from "../../../infrastructure/repositories/paypal/paypal.repository";
import { StripeRepository } from "../../../infrastructure/repositories/stripe/stripe.repository";

export abstract class PaymentMethod {
  abstract process(order: any): any;
}

export class PayPalPayment extends PaymentMethod {
  private repository: PayPalRepository;

  constructor() {
    super();
    this.repository = new PayPalRepository();
  }

  process(order) {
    return this.repository.order(order);
  }
}

export class StripePayment extends PaymentMethod {
  private repository: StripeRepository;

  constructor() {
    super();
    this.repository = new StripeRepository();
  }

  process(data) {
    return this.repository.order(data);
  }
}

export class BrainTreePayment extends PaymentMethod {
  private repository: BrainTreeRepository;

  constructor() {
    super();
    this.repository = new BrainTreeRepository();
  }

  process(data) {
    return this.repository.order(data);
  }
}
