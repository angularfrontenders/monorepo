import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IModifyTotalAmountCommand } from './iModifyTotalAmountCommand';
import { IResultCommand } from '../../../iResultCommand';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ModifyTotalAmountCommandDataService {

  private readonly _baseUrl: string = 'http://localhost:3000/invoices';

  public constructor(private _httpClient: HttpClient) {
   }

  public send(command: IModifyTotalAmountCommand): Promise<IResultCommand> {
    const url = `${this._baseUrl}/${command.id}`;
    return this._httpClient.patch<IResultCommand>(url, command, httpOptions).toPromise();
  }

}
