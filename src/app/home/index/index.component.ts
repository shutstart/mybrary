import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import {config } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css',
              './css/bootstrap.min.css',
              './css/animate.css',
              './css/meanmenu.min.css',
              './css/flexslider.css'],

  providers: [NgbCarouselConfig]
})
export class IndexComponent implements OnInit {

  constructor(config : NgbCarouselConfig) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
   }

  ngOnInit() {
  }

}
