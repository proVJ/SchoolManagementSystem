import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
  imports: [RouterLink],
})
export class AppHeaderComponent implements OnInit {
  currentPage: string | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;
      // Set currentPage only if a valid segment is found, otherwise it remains null initially
      this.currentPage = url.split('/').filter(Boolean).pop() || null;
      this.currentPage = this.currentPage == null ? 'home' : this.currentPage;
    });
  }



}
