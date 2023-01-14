interface IIdentity<T> {
    id: T
}

export interface IInvoiceLine extends IIdentity<string> {
    baseAmount:number;
    tax: number;
    taxAmount: number;
}

export interface IInvoice extends IIdentity<string> {
    totalAmount: number;
    invoiceDate: Date;
    invoiceNumber: string;
    lines: Array<IInvoiceLine>;
}