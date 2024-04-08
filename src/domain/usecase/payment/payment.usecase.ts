import { PaymentFactory, PaymentProvider } from "./payment.factory";
import { PaymentModel } from "../../model/payment.model";

export class PaymentUseCase {
  private factory: PaymentFactory;

  constructor() {
    this.factory = new PaymentFactory();
  }
  async execute(
    provider: PaymentProvider,
    order: { amount: number; currency: string }
  ) {
    const method = this.factory.create(provider);

    const response = method.process(order);

    return new PaymentModel(response);
  }
}
