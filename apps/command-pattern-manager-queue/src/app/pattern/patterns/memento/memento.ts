export interface IMemento<T> {
  getMemento(): T | undefined;
}

export class Memento<T> implements IMemento<T> {
  private _model: T | undefined = undefined;

  public constructor(data: T | undefined) {
    this._model = data;
  }

  public getMemento(): T | undefined {
    return this._model;
  }
}
