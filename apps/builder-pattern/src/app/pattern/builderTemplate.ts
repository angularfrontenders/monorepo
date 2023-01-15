import { IBuilder } from './iBuilder';

export abstract class BuilderTemplate<T> implements IBuilder<T>{

    protected _model: T;

    public constructor() {
        this._model = this.initialize();
    }

    public build(): T {
        return this._model;
    }

    protected abstract initialize(): T;
}
