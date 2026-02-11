import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from '../home/home';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { ProjectList } from '../projects/project-list/project-list';
import { Experience } from '../experience/experience';
import { Contact } from '../contact/contact';



// Importe as outras seções conforme tiver

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    Home,
    About,
    Skills,
    ProjectList,
    Experience,
    Contact

    // Adicione os outros aqui
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
