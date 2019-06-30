import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css',
              './css/bootstrap.min.css',
              './css/animate.css',
              './css/meanmenu.min.css',
              './css/flexslider.css']
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
