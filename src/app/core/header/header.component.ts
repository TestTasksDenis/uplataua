import { Component, OnDestroy, OnInit } from '@angular/core';
import { StaticInterface } from '../../shared/interfaces/static.interface';
import { StaticService } from '../../shared/services/static.service';
import { takeWhile } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CategoryInterface } from '../../shared/interfaces/category.interface';
import { CategoryService } from '../../shared/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  menuItems: StaticInterface[];
  menuCategories: CategoryInterface[];
  siteDomain = environment.siteDomain;
  private _alive = {
    static: true,
    category: true
  };

  constructor(private _staticService: StaticService, private _categoryService: CategoryService) { }

  ngOnInit() {
    this._staticService.staticPages
      .pipe(takeWhile(() => this._alive.static))
      .subscribe((data: StaticInterface[]) => this.menuItems = data);

    this._categoryService.categories
      .pipe(takeWhile(() => this._alive.category))
      .subscribe((data: CategoryInterface[]) => this.menuCategories = data);
  }

  ngOnDestroy() {
    this._alive.static = false;
    this._alive.category = false;
  }
}
