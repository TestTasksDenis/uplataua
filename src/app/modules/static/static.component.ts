import { Component, OnDestroy, OnInit } from '@angular/core';
import { StaticService } from '../../shared/services/static.service';
import { NavigationStart, Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit, OnDestroy {
  currentPage = {
    title: ''
  };
  private _alive = true;

  constructor(private _staticService: StaticService, private _router: Router) {}

  ngOnInit() {
    this._staticService.getStaticByUrl(this._router.url)
      .pipe(takeWhile(() => this._alive))
      .subscribe(data => (!data[0]) ? this._router.navigate(['/404']) : this.currentPage = data[0]);

    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this._staticService.getStaticByUrl(event.url)
          .pipe(takeWhile(() => this._alive))
          .subscribe(data => this.currentPage = data[0]);
      }
    });
  }

  ngOnDestroy() {
    this._alive = false;
  }
}
