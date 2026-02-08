/**
 * @file skills.ts
 * @description Componente responsável pela seção de Habilidades Técnicas.
 * @author Felipe Nascimento
 * @version 1.1.0
 */

import { Component } from '@angular/core';
import { SkillCard } from '../../models/skills.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  /** * @description Lista de cards de habilidades com a nova distribuição sugerida. */
  readonly skillCards: SkillCard[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', icon: 'devicon-angularjs-plain' },
        { name: 'React', icon: 'devicon-react-original' },
        { name: 'Tailwind', icon: 'devicon-tailwindcss-original' },
        { name: 'SEO', icon: 'devicon-chrome-plain' }
      ]
    },
    {
      title: 'Backend & DB',
      skills: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain-wordmark' },
        { name: 'Java', icon: 'devicon-java-plain' },
        { name: 'Spring Boot', icon: 'devicon-spring-plain' },
        { name: 'MySQL', icon: 'devicon-mysql-plain' }
      ]
    },
    {
      title: 'Ferramentas',
      skills: [
        { name: 'Git', icon: 'devicon-git-plain' },
        { name: 'Docker', icon: 'devicon-docker-plain' },
        { name: 'Bitbucket', icon: 'devicon-bitbucket-original' },
        { name: 'Figma', icon: 'devicon-figma-plain' }
      ]
    },
    {
      title: 'Extras',
      skills: [
        { name: 'CI/CD', icon: 'devicon-githubactions-plain' },
        { name: 'Kanban', icon: 'devicon-trello-plain' },
        { name: 'Scrum', icon: 'devicon-jira-plain' },
        { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark' }
      ]
    }
  ];

  constructor() {}
}