import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class HttpCallService {
  link = environment.serverDomain;

  constructor(private httpClient: HttpClient) {}

  public call(method: string, postfixLink: string, params?: any) {
    let resultCall;

    switch (method) {
      case 'GET':
        resultCall = this.httpClient.get(this.link + postfixLink);
        break;
      case 'POST':
        resultCall = this.httpClient.post(this.link + postfixLink, params);
        break;
      case 'DELETE':
        resultCall = this.httpClient.delete(this.link + postfixLink);
        break;
      case 'PUT':
        resultCall = this.httpClient.put(this.link + postfixLink, JSON.stringify(params));
        break;
      default:
        console.log('unknown method: ' + method);
        resultCall = false;
    }
    return resultCall;
  }
}
