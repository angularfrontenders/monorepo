import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ICreateHeaderCommand } from './iCreateHeaderCommand';
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
export class CreateHeaderCommandDataService {

  private readonly _baseUrl: string = 'http://localhost:3000/invoices';


  public constructor(private _httpClient: HttpClient) {
   }

  public send(command: ICreateHeaderCommand): Promise<IResultCommand> {
    return this._httpClient.post<IResultCommand>(this._baseUrl, command, httpOptions).toPromise();
  }

}
