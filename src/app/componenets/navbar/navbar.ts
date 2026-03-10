import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit{
  isDark = false;

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      this.isDark = true;
    }
  }

  pdfDownload(){
    window.open('assets/Preethi_AngularDeveloper_wrong.pdf', '_blank');
  }

  toggleTheme() {
    this.isDark = !this.isDark;

    if (this.isDark) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}
