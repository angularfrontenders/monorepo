import { Injectable } from '@angular/core';
import { compare, Operation } from 'fast-json-patch';

@Injectable({
  providedIn: 'root'
})
export class ComparerService {

  public equals<T>(source: T, target: T): boolean {
    const patch: Array<Operation> = compare(source, target);
    return patch.length === 0;
  }

}
