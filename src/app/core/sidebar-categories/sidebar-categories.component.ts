import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryInterface } from '../../shared/interfaces/category.interface';
import { CategoryService } from '../../shared/services/category.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar-categories',
  templateUrl: './sidebar-categories.component.html',
  styleUrls: ['./sidebar-categories.component.scss']
})
export class SidebarCategoriesComponent implements OnInit, OnDestroy {
  menuCategories: CategoryInterface[];
  private _alive = true;

  constructor(private _categoryService: CategoryService) { }

  ngOnInit() {
    this._categoryService.categories
      .pipe(takeWhile(() => this._alive))
      .subscribe((data: CategoryInterface[]) => this.menuCategories = data);
  }

  ngOnDestroy() {
    this._alive = false;
  }
}
