import { Component, OnInit } from '@angular/core';

import { InvoiceBuilder } from './pattern/invoiceBuilder';
import { IInvoice } from './pattern/iInvoice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'Builder pattern';
  public invoiceDefault: IInvoice | undefined;
  public invoice: IInvoice | undefined;

  public ngOnInit(): void {
    this.invoiceDefault = new InvoiceBuilder().build();
    this.invoice = new InvoiceBuilder().invoiceNumber('my invoice').totalAmount(10).build();
  }

}
