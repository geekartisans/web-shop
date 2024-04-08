export class BrainTreeEntity {
  id: number;
  status: string;

  constructor({ id, status }: Required<BrainTreeEntity>) {
    this.id = id;
    this.status = status;
  }
}
