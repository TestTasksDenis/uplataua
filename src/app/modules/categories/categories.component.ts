import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NavigationStart, Router } from '@angular/router';
import { CategoryService } from '../../shared/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  currentPage = {};
  private _alive = true;

  constructor(private _categoryService: CategoryService, private _router: Router) {}

  ngOnInit() {
    this._categoryService.getCategoryByUrl(this._router.url)
      .pipe(takeWhile(() => this._alive))
      .subscribe(data => this.currentPage = data[0]);

    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this._categoryService.getCategoryByUrl(event.url)
          .pipe(takeWhile(() => this._alive))
          .subscribe(data => this.currentPage = data[0]);
      }
    });
  }

  ngOnDestroy() {
    this._alive = false;
  }
}
