import { BrainTreeEntity } from "../../entity/braintree.entity";

export class BrainTreeRepository {
  order(data: any) {
    return new BrainTreeEntity({ id: 1, status: "success" });
  }
}
