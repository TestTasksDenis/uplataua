import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class HttpService {
  link = environment.serverDomain;

  constructor(private _httpClient: HttpClient) {}

  public call(method: string, postfixLink: string, params?: any) {
    let resultCall = null;

    switch (method) {
      case 'GET':
        resultCall = this._httpClient.get(this.link + postfixLink);
        break;
      case 'POST':
        resultCall = this._httpClient.post(this.link + postfixLink, params);
        break;
      case 'DELETE':
        resultCall = this._httpClient.delete(this.link + postfixLink);
        break;
      case 'PUT':
        resultCall = this._httpClient.put(this.link + postfixLink, JSON.stringify(params));
        break;
      default:
        console.log('unknown method: ' + method);
    }
    return resultCall;
  }
}
