export interface IMemento<T> {
  getMemento(): T;
}

export class Memento<T> implements IMemento<T> {
  private _model: T = null;

  public constructor(data: T) {
    this._model = data;
  }

  public getMemento(): T {
    return this._model;
  }
}
