import { IBuilder } from './iBuilder';
import { IInvoice } from './iInvoice';

export interface IInvoiceBuilder extends IBuilder<IInvoice> {
    invoiceDate(invoiceDate: Date): IInvoiceBuilder;
    invoiceNumber(invoiceNumber: string): IInvoiceBuilder;
    totalAmount(totalAmount: number): IInvoiceBuilder;
}