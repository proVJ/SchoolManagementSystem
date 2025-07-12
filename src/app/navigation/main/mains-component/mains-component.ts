declare const PureCounter: any;

import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-mains',
  imports: [],
  templateUrl: './mains-component.html',
  styleUrl: './mains-component.css'
})
export class MainsComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize PureCounter script if available
      if (typeof (window as any).PureCounter !== 'undefined') {
        new (window as any).PureCounter();
      }
    }
  }
} 
