import { StripeEntity } from "../../entity/stripe.entity";

export class StripeRepository {
  order(data: any) {
    return new StripeEntity({
      id: 1,
      callback: "http://localhost:3000/callback",
    });
  }
}
