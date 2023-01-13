import { CloneAdapter } from "../adapter/cloneAdapter";

export abstract class ClonableTemplate<T> {
  protected clone(data: T): T {
    const cloneAdapter: CloneAdapter<T> = new CloneAdapter();
    return cloneAdapter.clone(data);
  }
}
