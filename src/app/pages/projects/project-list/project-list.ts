/**
 * @file project-list.ts
 * @description Componente responsável por listar os projetos na home-page.
 * @author Felipe Nascimento
 * @version 1.0.0
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/projects.interface';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList implements OnInit {
  /** * @description Lista de projetos que será renderizada no template. */
  public projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  /** * @description Inicializa o componente buscando os projetos do serviço. */
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
}
