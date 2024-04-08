import { PaymentUseCase } from "../../../domain/usecase/payment/payment.usecase";
import { PaymentResponse } from "../../response/payment.response";

export class PaymentsController {
  private usecase: PaymentUseCase;

  constructor() {
    this.usecase = new PaymentUseCase();
  }

  async charge(req, res) {
    const { provider, amount, currency } = req.body;

    const model: any = this.usecase.execute(provider, { amount, currency });

    const response = new PaymentResponse(model);

    res.json(response);
  }
}
