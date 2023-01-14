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

  private readonly url: string = 'http://localhost/invoice/createHeader';

  public constructor(private _httpClient: HttpClient) {
   }

  public send(command: ICreateHeaderCommand): Promise<IResultCommand> {
    return this._httpClient.post<IResultCommand>(this.url, command, httpOptions).toPromise();
  }
 
}
