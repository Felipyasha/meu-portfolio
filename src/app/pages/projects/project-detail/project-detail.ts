import { Component, OnInit, inject, signal, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../../models/projects.interface';
import { ProjectService } from '@services/project.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.html'
})
export class ProjectDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);
  private platformId = inject(PLATFORM_ID);

  // Signal para armazenar o projeto encontrado
  project = signal<Project | undefined>(undefined);

  ngOnInit(): void {
    // Captura o ID da rota
    const id = this.route.snapshot.paramMap.get('id');

    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    
    if (id) {
      // Busca o projeto no service usando o ID capturado
      const foundProject = this.projectService.getProjectById(id);
      this.project.set(foundProject);
    }
  }
}
