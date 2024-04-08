export class StripeEntity {
  id: number;
  callback: string;

  constructor({ id, callback }: Required<StripeEntity>) {
    this.id = id;
    this.callback = callback;
  }
}
