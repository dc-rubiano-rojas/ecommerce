import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerVariable = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:scroll')
  scrollFunction(): void{
    console.log('scrlling...');
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.headerVariable = true;
    } else {
      this.headerVariable = false;
    }
  }

}
