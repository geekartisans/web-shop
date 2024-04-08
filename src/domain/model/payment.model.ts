export class PaymentModel {
  id: string;
  status: string;
  email: string;
  callback: string;

  constructor({ id, status, email, callback }: any) {
    this.id = id;
    this.status = status;
    this.email = email;
    this.callback = callback;
  }
}
