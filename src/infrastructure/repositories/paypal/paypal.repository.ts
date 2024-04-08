import { PaypalEntity } from "../../entity/paypal.entity";

export class PayPalRepository {
  order(data: any) {
    return new PaypalEntity({
      id: 1,
      email: "test@mail.com",
      status: "success",
    });
  }
}
