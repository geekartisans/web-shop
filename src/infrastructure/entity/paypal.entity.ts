export class PaypalEntity {
  id: number;
  email: string;
  status: string;

  constructor({ id, email, status }: Required<PaypalEntity>) {
    this.id = id;
    this.email = email;
    this.status = status;
  }
}
