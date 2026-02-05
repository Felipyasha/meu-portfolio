import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * @description
 * Componente de navegação principal.
 * Gerencia o estado do menu mobile e links de ancoragem.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  /** @description Controla a visibilidade do menu hambúrguer no mobile */
  isMenuOpen = false;

  /** @description Guarda o nome do item que está ativo no momento */
  activeItem: string = 'Início';

  /** @description Itens de navegação */
  navItems = [
    { label: 'Início', link: '' },
    { label: 'Sobre', link: '#about' },
    { label: 'Habilidades', link: '#skills' },
    { label: 'Projetos', link: '#projects' },
    { label: 'Experiência', link: '#expirience' },
    { label: 'Formação', link: '#education' },
    { label: 'Contato', link: '#contact' },
  ];

  /** @description Inverte o estado do menu mobile */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /** @description Define o ativo e fecha o menu mobile ao clicar */
  setActive(itemLabel: string): void {
    this.activeItem = itemLabel;
    this.isMenuOpen = false;
  }
}
