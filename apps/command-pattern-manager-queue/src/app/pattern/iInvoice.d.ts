interface IIdentity<T> {
    id?: T
}

export interface IInvoice extends IIdentity<number> {
    totalAmount: number;
    invoiceDate: Date;
    invoiceNumber: string;
}