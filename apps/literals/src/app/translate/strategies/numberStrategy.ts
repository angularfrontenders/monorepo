import { Injectable } from '@angular/core';
import { ITranslateStrategy } from './iTranslateStrategy';
import { DecimalPipe } from '@angular/common';

@Injectable()
export class NumberStrategy implements ITranslateStrategy {
  public constructor(private _decimalPipe: DecimalPipe) {}

  public canApply(index: number, text: string, value: any): boolean {
    const regNumber = this.getRegExp(index);
    return regNumber.test(text);
  }

  public apply(index: number, text: string, value: any): string {
    if (!this.isNumber(value)) {
      console.log(`TranslatePipe: value at position ${index} is not a number`);
      return text;
    }
    const regNumber = this.getRegExp(index);
    return text.replace(regNumber, this._decimalPipe.transform(value));
  }

  private getRegExp = (index: number) => new RegExp(`{${index}:n}`, 'gm');
  private isNumber = (value: any) => typeof value === 'number';

}
