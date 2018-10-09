import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { CategoryInterface } from '../interfaces/category.interface';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {
  constructor(private _httpService: HttpService) {}

  get categories(): Observable<CategoryInterface[]> {
    return this._httpService.call('GET', '/categories');
  }
}
