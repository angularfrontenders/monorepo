import clone from 'fast-clone';

export interface ICloneAdapter<T> {
    clone(data: T): T;
}

export class CloneAdapter<T> implements ICloneAdapter<T> {
    public clone(data: T): T {
        // Call the third-party library-method
        return clone(data);
    }
}
