import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from './componenets/navbar/navbar';
import { Footer } from './componenets/footer/footer';
import { RouterLink, RouterLinkActive, NavigationEnd, RouterModule  } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, RouterLink, RouterLinkActive, RouterModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('preethi-portfolio');
  pages = [
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' },
    { path: '/contact', label: 'Contact' },
  ];

  currentIndex = 0;
   constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentUrl = this.router.url;
        this.currentIndex = this.pages.findIndex(p => p.path === currentUrl);
      });
  }

  get previousPage() {
    return this.currentIndex > 0 ? this.pages[this.currentIndex - 1] : null;
  }

  get nextPage() {
    return this.currentIndex < this.pages.length - 1
      ? this.pages[this.currentIndex + 1]
      : null;
  }
}
