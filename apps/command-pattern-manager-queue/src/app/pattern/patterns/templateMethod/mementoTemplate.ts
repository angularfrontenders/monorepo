import { ClonableTemplate } from './clonableTemplate';
import { Memento } from '../memento/memento';

export abstract class MementoTemplate<T> extends ClonableTemplate<T>{
    private _mementos: Array<Memento<T>> = [];

    protected addMemento(model: T | undefined): void {
        const modelCloned: T | undefined = model ? this.clone(model) : undefined;
        this._mementos.push(new Memento(modelCloned));
    }

    protected getMemento(): T | undefined {
        const memento = this._mementos.pop();
        return memento?.getMemento();
    }


}
