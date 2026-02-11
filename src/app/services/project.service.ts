/**
 * @file project.service.ts
 * @description Serviço responsável pelo gerenciamento e fornecimento de dados dos projetos.
 * @author Felipe Nascimento
 * @version 1.0.0
 */

import { Injectable } from '@angular/core';
import { Project } from '../models/projects.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  /** * @description Simulação de base de dados local para os projetos do portfólio.
   * @private
   * @readonly
   */
  private readonly projects: Project[] = [
    {
      id: 'portfolio-v3',
      title: 'Portfolio Moderno v3',
      thumbnail: 'assets/images/portfolio-thumb.jpg',
      description:
        'Desenvolvimento de uma Single Page Application de alta performance com Angular 19 e SSR.',
      fullDescription:
        'Criação de um portfolio técnico focado em experiência de usuário (UX) e design minimalista. O projeto utiliza as funcionalidades mais recentes do Angular, como Signals e Standalone Components, integrado ao Tailwind CSS para uma interface responsiva e moderna com efeitos de backdrop-blur e animações personalizadas.',
      technologies: ['Angular 19', 'TypeScript', 'Tailwind CSS', 'SSR'],
      githubUrl: 'https://github.com/Felipyasha/meu-portfolio',
      status: 'Em desenvolvimento',
      client: 'Projeto Pessoal',
      duration: '1 mês',
      features: [
        'Navegação dinâmica com Angular Router',
        'Renderização do lado do servidor (SSR) para SEO',
        'Gestão de estado reativa com Signals',
        'Layout adaptativo para dispositivos móveis e desktop',
      ],
      processSteps: [
        {
          title: 'Concepção e Design',
          description:
            'Definição da paleta de cores (Dark Theme com detalhes em Vermelho) e estrutura de Estudo de Caso (Case Study).',
        },
        {
          title: 'Desenvolvimento Core',
          description:
            'Implementação do sistema de rotas e criação do serviço de dados centralizado para os projetos.',
        },
        {
          title: 'Polimento e UX',
          description:
            'Ajuste fino de transições de página e tratamento de scroll para garantir fluidez na navegação.',
        },
      ],
      gallery: ['assets/images/port-1.jpg', 'assets/images/port-2.jpg'],
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
    return this.projects.find((p) => p.id === id);
  }
}
