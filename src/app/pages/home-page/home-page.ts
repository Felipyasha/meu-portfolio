import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from '../home/home';
import { About } from '../about/about';
// Importe as outras seções conforme tiver

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    Home,
    About,
    // Adicione os outros aqui
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}