declare const PureCounter: any;
declare const aosInit: any;
declare const bootstrap: any;

import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [],
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      
      // Initialize PureCounter script if available
      if (typeof (window as any).PureCounter !== 'undefined') {
        new (window as any).PureCounter();
      }

      // Initialize Bootstrap Carousel
      const testimonialCarousel = document.getElementById('testimonialCarousel');
      if (testimonialCarousel) {
        new bootstrap.Carousel(testimonialCarousel);
      }
      
    }
  }

}