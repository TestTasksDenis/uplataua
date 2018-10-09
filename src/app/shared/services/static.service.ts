import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { StaticInterface } from '../interfaces/static.interface';
import { Observable } from 'rxjs';

@Injectable()
export class StaticService {
  constructor(private _httpService: HttpService) {}

  get staticPages(): Observable<StaticInterface[]> {
    return this._httpService.call('GET', '/static');
  }

  getStaticByUrl(url: string): Observable<StaticInterface> {
    url = url.slice(1);
    return this._httpService.call('GET', `/static?url=${url}`);
  }
}
