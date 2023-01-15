import { BuilderTemplate } from './builderTemplate';

import { IInvoice } from './iInvoice';
import { IInvoiceBuilder } from './iInvoiceBuilder';

export class InvoiceBuilder extends BuilderTemplate<IInvoice> implements IInvoiceBuilder {

    protected initialize(): IInvoice {
        return {
            invoiceDate: new Date(),
            invoiceNumber: '',
            totalAmount: 0
        };
    }

    public invoiceDate(invoiceDate: Date): IInvoiceBuilder {
        this._model.invoiceDate = invoiceDate;
        return this;
    }

    public invoiceNumber(invoiceNumber: string): IInvoiceBuilder {
        this._model.invoiceNumber = invoiceNumber;
        return this;
    }

    public totalAmount(totalAmount: number): IInvoiceBuilder {
        this._model.totalAmount = totalAmount;
        return this;
    }
}
