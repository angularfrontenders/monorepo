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

  private readonly url: string = 'http://localhost/invoice/modifyTotalAmount';

  public constructor(private _httpClient: HttpClient) {
   }

  public send(command: IModifyTotalAmountCommand): Promise<IResultCommand> {
    return this._httpClient.post<IResultCommand>(this.url, command, httpOptions).toPromise();
  }

}
