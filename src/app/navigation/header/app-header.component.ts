import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common'; // Import AsyncPipe and CommonModule
import { BehaviorSubject, Observable, Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
  imports: [RouterLink, CommonModule], // Add CommonModule here
  standalone: true // Assuming this is a standalone component based on imports array usage
})
export class AppHeaderComponent implements OnInit, OnDestroy {
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
      page = page == null ? 'home' : page;
      this._currentPageSubject.next(page); // Emit the new page value
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
