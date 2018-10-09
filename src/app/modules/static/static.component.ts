import { Component, OnDestroy, OnInit } from '@angular/core';
import { StaticInterface } from '../../shared/interfaces/static.interface';
import { StaticService } from '../../shared/services/static.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit, OnDestroy {
  staticPages: StaticInterface[];
  private _alive = true;

  constructor(private _staticService: StaticService) { }

  ngOnInit() {
    this._staticService.staticPages
      .pipe(takeWhile(() => this._alive))
      .subscribe((data: StaticInterface[]) => this.staticPages = data);
  }

  ngOnDestroy() {
    this._alive = false;
  }
}
