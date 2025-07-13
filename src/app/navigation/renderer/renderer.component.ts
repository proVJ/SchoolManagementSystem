import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainsComponent } from "../main/mains-component/mains-component";
import { AboutComponent } from "../../static_app/about/about.component";
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css'],
  imports: [MainsComponent, CommonModule, AboutComponent]
})
export class RendererComponent implements OnInit {
  currentPage: string | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;
      // Set currentPage only if a valid segment is found, otherwise it remains null initially
      this.currentPage = url.split('/').filter(Boolean).pop() || null;
      this.currentPage = this.currentPage==null ? 'home' : this.currentPage;
    });
  }

}
