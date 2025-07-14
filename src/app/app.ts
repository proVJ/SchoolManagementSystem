import { Component } from '@angular/core';
import { AppHeaderComponent } from './navigation/header/app-header.component';
import { FooterComponent } from './navigation/footer/footer-component/footer-component';
import { Scrolltop } from "./navigation/scrolltop/scrolltop/scrolltop";
import { RendererComponent } from "./navigation/renderer/renderer.component";
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { BehaviorSubject, filter, Observable, Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MainsComponent } from "./static_app/main/mains-component/mains-component";
@Component({
  selector: 'app-root',
  imports: [CommonModule, AppHeaderComponent, FooterComponent, Scrolltop, RouterModule, MainsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'SchoolManagementSystem';
  private _currentPageSubject = new BehaviorSubject<string | null>('home'); // Initialize with 'home'
    currentPage$: Observable<string | null> = this._currentPageSubject.asObservable();
  
    private _destroy$ = new Subject<void>(); // Subject to signal component destruction
  
    constructor(private router: Router) { }
  
    ngOnInit(): void {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this._destroy$) // Automatically unsubscribe when _destroy$ emits
      ).subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects;
        let page = url.split('/').filter(Boolean).pop() || null;
        page = page === null ? 'home' : page;
        this._currentPageSubject.next(page); // Emit the new page value
      });
    }
  
    ngOnDestroy(): void {
      this._destroy$.next();
      this._destroy$.complete();
    }
}
