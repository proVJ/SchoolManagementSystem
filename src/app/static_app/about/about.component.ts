import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavigationService } from '../../navigation/global/sevices/navigation.service';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types'; // Import SwiperOptions type for better type safety

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [],
})
export class AboutComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const swiperConfig: SwiperOptions = {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
        enabled:true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    };

    new Swiper('.swiper', swiperConfig);
  }

}