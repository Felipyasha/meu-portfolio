/**
 * @file about.ts
 * @description Componente responsável pela seção "Sobre Mim" (Lore).
 * Gerencia a exibição dos cards de história utilizando a interface global LoreCard.
 * @author Felipe Nascimento
 * @version 1.0.0
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoreCard } from '../../models/lore.interface';

/**
 * @description
 * Componente da seção Sobre.
 * Renderiza uma lista de cards informativos sobre a carreira e essência do perfil.
 */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  /** * @description Lista de cards que compõem a narrativa da seção Sobre.
   * Cada item segue o contrato definido na interface LoreCard.
   */
  readonly loreCards: LoreCard[] = [
    {
      id: '[01]',
      title: 'STACK CORE',
      content:
        'Desenvolvedor Front-end focado em ecossistemas modernos, com especialidade em Angular e React. Especializado em criar soluções eficientes que alinham performance técnica a interfaces limpas, garantindo modularidade e reaproveitamento de código através de bibliotecas de componentes e Design Systems para entregar valor real ao usuário final.',
    },
    {
      id: '[02]',
      title: 'TRAJETÓRIA',
      content:
        'Possuo experiência sólida no desenvolvimento de aplicações complexas e SPAs em grandes empresas como Lojas Marisa e Diebold Nixdorf. Minha atuação foca na criação de ferramentas estratégicas de ressarcimento e gerenciamento de filas, utilizando tecnologias como React, Angular e Ionic para integrar APIs RESTful, reduzir erros manuais e elevar a eficiência operacional através de soluções escaláveis.',
    },
    {
      id: '[03]',
      title: 'EVOLUÇÃO',
      content:
        'Minha trajetória é marcada pela constante evolução técnica e pela transição fluida entre grandes ecossistemas. Participei de melhorias críticas que elevaram a performance e o SEO de aplicações em 35%, além de atuar com fluxos de CI/CD via Bitbucket e Bamboo. Busco aprimoramento constante e, no momento, foco na expansão do meu conhecimento em serviços AWS para construir soluções ainda mais integradas.',
    },
    {
      id: '[04]',
      title: 'ESSÊNCIA',
      content:
        'Minha essência consiste em equilibrar estética e funcionalidade através de boas práticas e performance. Busco transformar linhas de código em experiências fluidas, onde a precisão técnica se manifesta, visualmente, como magia na tela. Fora do ambiente de desenvolvimento, encontro esse mesmo equilíbrio na música e nos games, onde a estratégia e a alta performance refletem a disciplina que aplico em cada projeto.',
    },
  ];

  /**
   * @constructor
   * Inicializa o componente About.
   */
  constructor() {}
}
