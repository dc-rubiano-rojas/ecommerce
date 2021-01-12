import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  items: Array<any> = [
    {img: 'assets/images/articulo-2.jpg'},
    {img: 'assets/images/articulo-3.jpg'},
    {img: 'assets/images/articulo-1.jpg'},
  ];

  constructor(private config: NgbCarouselConfig) {
    this.config.interval = 3000;
    this.config.pauseOnHover = true;
    // this.config.showNavigationArrows = true;
    this.config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
  }

}
