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
      title: 'CORE',
      content:
        'Desenvolvedor Front-end focado em ecossistemas modernos, com especialidade em Angular e React. Especializado em criar soluções modernas e eficientes, aliando performance técnica com interfaces limpas e objetivas, garantindo valor real ao usuário final.',
    },
    {
      id: '[02]',
      title: 'ESSÊNCIA',
      content:
        'Minha essência vive no equilíbrio entre estética e funcionalidade, guiada por boas práticas e pela busca constante por performance. Transformo linhas de código em experiências fluidas, onde a precisão técnica ganha forma e eleva a usabilidade e o design responsivo, como magia na tela',
    },
    {
      id: '[03]',
      title: 'EVOLUÇÃO',
      content:
        'Minha trajetória é marcada pela constante atualização técnica e pela transição fluida entre grandes ecossistemas. Busco evoluir a cada projeto, transformando desafios complexos em soluções escaláveis e mantendo o foco no que há de mais moderno no front-end.',
    },
    {
      id: '[04]',
      title: 'YASHA',
      content:
        'Fora do ambiente de desenvolvimento, encontro equilíbrio na música e nos games. Admirador da cena emo e de Taylor Swift, também dedico meu tempo ao cenário competitivo, onde a estratégia e a busca pela alta performance nos jogos refletem a mesma disciplina que aplico na construção do meu código.',
    },
  ];

  /**
   * @constructor
   * Inicializa o componente About.
   */
  constructor() {
    console.log('🚀 About component carregado!');
  }
}
