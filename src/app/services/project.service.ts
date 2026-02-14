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
      id: 'portfolio',
      title: 'Portfólio',
      thumbnail: 'images/project-1/port-cover.PNG',
      description:
        'Portfólio desenvolvido com Angular 19+ (Signals & SSR) e Tailwind CSS v4. Focado em código limpo com TypeScript estrito, componentes standalone e testes com Vitest, SEO otimizado e estética Glassmorphism.',
      fullDescription:
        'Meu portfólio vai além de uma simples página estática. É um projeto construído como se fosse para produção real. \nA base é Angular moderno com TypeScript em modo estrito, usando modelos tipados, signals para gerenciamento reativo, injeção de dependência moderna e lógica preparada para SSR. Isso garante código mais seguro, previsível e fácil de manter. \nA arquitetura segue boas práticas de engenharia: componentes standalone, serviços e modelos bem definidos, documentação com JSDoc e configuração de Vitest para testes. Também implementei lazy loading, SSR com Express, hidratação client-side, orçamentos de bundle e consumo de API para envio de emails, tudo pensando em performance, SEO e experiência do usuário. \nNo visual, uso Tailwind CSS v4, dark theme, animações personalizadas e glassmorphism para criar uma identidade moderna. Ao mesmo tempo, construí uma narrativa própria em torno de "Lore" e do conceito "S-Rank Archer Developer", conectando minha trajetória técnica de forma mais memorável. \nÉ esse equilíbrio entre código bem estruturado, práticas modernas de front-end e apresentação criativa que diferencia meu perfil no mercado.',
      technologies: ['Angular 19+', 'TypeScript', 'Tailwind CSS', 'SSR'],
      githubUrl: 'https://github.com/Felipyasha/meu-portfolio',
      status: 'Em desenvolvimento',
      client: 'Projeto Pessoal',
      duration: '1 mês',
      features: [
        'Arquitetura Reativa & State Management com Signals',
        'Server-Side Rendering (SSR) & Hidratação Avançada',
        'Engenharia Type-Safe com TypeScript em Modo Estrito',
        'Otimização de Core Web Vitals & Performance Budgets',
        'Testes Unitários e de Integração com Vitest',
        'UI/UX Moderna com Tailwind v4 e Glassmorphism',
        'Arquitetura de Componentes Standalone e Injeção de Dependência',
      ],
      /* processSteps: [
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
      ], */
      gallery: [
        'images/project-1/1.PNG',
        'images/project-1/2.PNG',
        'images/project-1/3.PNG',
        'images/project-1/4.PNG',
      ],
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
