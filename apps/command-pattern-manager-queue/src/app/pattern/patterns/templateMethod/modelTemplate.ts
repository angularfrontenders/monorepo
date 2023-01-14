import { MementoTemplate } from './mementoTemplate';

export interface IModel<T> {
  create(): T;
  getModel(): T | undefined;
  setModel(value: T): void;
  toString(): string;
  backup(): void;
  restore(): void;
  getModelCloned(): T | undefined;
  getChanges(model: T): T;
  hasChanges(model: T, field?: string): boolean;
  isNew(): boolean;
}

export abstract class ModelTemplate<T> extends MementoTemplate<T>  implements IModel<T> {

  protected _model: T | undefined;

  public abstract create(): T;

  public getModel(): T | undefined {
    return this._model;
  }

  public setModel(value: T): void {
    this._model = value;
  }

  public override toString(): string {
    if (this._model) {
      return JSON.stringify(this._model);
    }
    return '';
  }

  public getModelCloned(): T | undefined {
    return this.clone(this._model);
  }

  public backup(): void {
    this.addMemento(this._model);
  }

  public restore(): void {
    this._model = this.getMemento();
  }

  public getChanges(model: T): T {
    return {} as T;
  }

  public hasChanges(model: T, field?: string): boolean {
    return false;
  }

  public abstract isNew(): boolean;

}
