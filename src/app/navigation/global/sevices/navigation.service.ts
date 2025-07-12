import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  currentPage:string='';

constructor(private router: Router) { 
   this.trackActivePage();
}


trackActivePage(){
  debugger;
  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe((event: NavigationEnd) => {
    const url = event.urlAfterRedirects;
    this.currentPage = url.split('/').filter(Boolean).pop() || 'home';  // Default to 'home' if root
    
  });
}

getCurrentPage():string{
  return this.currentPage;
}

}
