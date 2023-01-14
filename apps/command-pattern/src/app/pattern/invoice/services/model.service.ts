import { Injectable } from '@angular/core';

import { IInvoice } from '../../iInvoice';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  private _model: IInvoice;

  public constructor() {
    this._model = this.create();
  }

  public getModel(): IInvoice {
    return this._model;
  }

  public setModel(model: IInvoice): void {
    this._model = model;
  }

  public create(): IInvoice {
    this._model = {
      id: '',
      invoiceDate: new Date(),
      invoiceNumber: '',
      totalAmount: 0,
      lines: []
    };
    return this._model;
  }

}
