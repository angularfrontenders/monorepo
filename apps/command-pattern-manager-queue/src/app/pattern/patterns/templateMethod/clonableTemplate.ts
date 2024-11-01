import { CloneAdapter } from '../adapter/cloneAdapter';

export abstract class ClonableTemplate<T> {
    protected clone(data: T | undefined): T | undefined {
        if (!data) {
            return data;
        }
        const cloneAdapter: CloneAdapter<T> = new CloneAdapter();
        return cloneAdapter.clone(data);
    }
}
