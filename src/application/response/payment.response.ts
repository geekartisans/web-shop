export class PaymentResponse {
  id: string;
  status: string;
  callback: string;

  constructor({ id, status, callback }) {
    this.id = id;
    this.status = status;
    this.callback = callback;
  }
}
