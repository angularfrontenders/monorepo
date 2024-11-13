import { ClonableTemplate } from './clonableTemplate';
import { Memento } from '../memento/memento';

export interface IModelService<T> {
    initialize(): void;
    makeModelBackup(): void;
    restoreModelBackup(): void;
    getModel(): T;
    setModel(value: T): void;
    toString(): string;
}

export abstract class ModelTemplateService<T> extends ClonableTemplate<T> implements IModelService<T> {
    private _memento: Memento<T> = null;
    private _model: T = null;

    public initialize(): void {
        this._model = null;
        this._memento = null;
    }

    public makeModelBackup(): void {
        this._memento = new Memento(this.clone(this._model));
    }

    public restoreModelBackup(): void {
        this._model = this._memento.getMemento();
    }

    public getModel(): T {
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
}
