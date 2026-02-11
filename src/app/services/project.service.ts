/**
 * @file project.service.ts
 * @description Serviço responsável pelo gerenciamento e fornecimento de dados dos projetos.
 * @author Felipe Nascimento
 * @version 1.0.0
 */

import { Injectable } from '@angular/core';
import { Project } from '../models/projects.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  /** * @description Simulação de base de dados local para os projetos do portfólio.
   * @private
   * @readonly
   */
  private readonly projects: Project[] = [
    {
      id: '1',
      title: 'Projeto Alpha',
      thumbnail: 'assets/images/project1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet',
      fullDescription: 'Descrição completa e detalhada para a página de detalhes...',
      technologies: ['Angular', 'TypeScript', 'Tailwind'],
      githubUrl: 'https://github.com/seu-user/projeto-alpha'
    },
    {
      id: '2',
      title: 'Projeto Beta',
      thumbnail: 'assets/images/project2.jpg',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      fullDescription: 'Descrição completa e detalhada para a página de detalhes...',
      technologies: ['React', 'Node.js', 'MySQL'],
      githubUrl: 'https://github.com/seu-user/projeto-beta'
    },
    {
      id: '3',
      title: 'Projeto Gamma',
      thumbnail: 'assets/images/project3.jpg',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      fullDescription: 'Descrição completa e detalhada para a página de detalhes...',
      technologies: ['Java', 'Spring Boot', 'AWS'],
      githubUrl: 'https://github.com/seu-user/projeto-gamma'
    },
  ];

  constructor() {}

  /** * @description Retorna a lista completa de projetos cadastrados.
   * @returns {Project[]} Array contendo todos os projetos.
   */
  getProjects(): Project[] {
    return this.projects;
  }

  /** * @description Busca um projeto específico através do seu identificador único.
   * @param {string} id - O ID do projeto desejado.
   * @returns {Project | undefined} O objeto do projeto encontrado ou undefined caso não exista.
   */
  getProjectById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }
}