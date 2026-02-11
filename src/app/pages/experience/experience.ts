/**
 * @file experience.ts
 * @description Componente que gere e exibe a trajetória profissional de Felipe Nascimento.
 * @author Felipe Nascimento
 * @version 1.0.0
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceCard } from '../../models/experience.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  /** * @description Lista de experiências profissionais extraídas do currículo oficial.
   * @public
   * @readonly
   */
  public readonly experiences: ExperienceCard[] = [
    {
      id: '1',
      role: 'Desenvolvedor Front-End',
      company: 'Lojas Marisa',
      location: 'São Paulo, SP',
      period: 'Fev/2022 - Fev/2024',
      description:
        'Responsável pelo desenvolvimento e manutenção do ecossistema de e-commerce, focando na evolução da plataforma de vendas online e na criação de ferramentas internas para otimização de processos financeiros.',
      activities: [
        'Desenvolvi e mantive aplicações web responsivas utilizando SAP Hybris, HTML, CSS e Java Server Pages - JSP',
        'Desenvolvi ferramenta completa de ressarcimento em React (Next.js) com integração de APIs RESTful, em uma equipe multidisciplinar',
        'Implementei melhorias de performance e otimização de SEO, aumentando a pontuação em 35%',
        'Corrigi bugs críticos focando em performance, acessibilidade e experiência do utilizador',
        'Colaborei com equipes multidisciplinares em ambiente ágil (Scrum)',
      ],
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'APIs REST',
        'SEO',
        'Scrum',
        'Bamboo',
        'BitBucket',
        'Jira',
      ],
    },
    {
      id: '2',
      role: 'Dev Front-End (Estágio)',
      company: 'Diebold Nixdorf',
      location: 'São Paulo, SP',
      period: 'Fev/2019 - Fev/2020',
      description:
        'Atuação no desenvolvimento de interfaces para Single Page Applications (SPA) e manutenção técnica de software de missão crítica para terminais de autoatendimento bancário (ATM).',
      activities: [
        'Realizei correções técnicas e melhorias em sistemas de autoatendimento bancário e interfaces de caixas eletrônicos (ATM)',
        'Desenvolvi Single Page Applications (SPA) utilizando Angular e Ionic',
        'Participei do desenvolvimento de um gerenciador de filas completo com IONIC e TypeScript, integrando APIs RESTful',
        'Trabalhei com metodologias ágeis (Scrum), colaborando diretamente com equipes multidisciplinares',
        'Utilizei TypeScript, JSON e Bootstrap no desenvolvimento de soluções front-end',
      ],
      technologies: [
        'Angular',
        'Ionic',
        'TypeScript',
        'Bootstrap',
        'Angular-Material',
        'Git',
        'Scrum',
        'APIs REST',
        'JSON',
        'Java',
      ],
    },
  ];
}
