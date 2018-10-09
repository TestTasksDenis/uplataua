import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { CategoryInterface } from '../interfaces/category.interface';

@Injectable()
export class CategoryService {
  constructor(private _httpService: HttpService) {}

  get categories(): Observable<CategoryInterface[]> {
    return this._httpService.call('GET', '/categories');
  }

  getCategoryByUrl(url: string): Observable<CategoryInterface> {
    url = url.replace(/\/category\//, '');
    return this._httpService.call('GET', `/categories?url=${url}`);
  }
}
