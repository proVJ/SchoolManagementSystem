import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "../../static_app/about/about.component";
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, filter, takeUntil } from 'rxjs';
import { MainsComponent } from '../../static_app/main/mains-component/mains-component';
import { CourcesComponent } from "../../static_app/cources/cources.component";

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css'],
  imports: [MainsComponent, CommonModule, AboutComponent, CourcesComponent]
})
export class RendererComponent implements OnInit, OnDestroy {

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
