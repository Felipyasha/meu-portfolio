import { Component, HostListener, OnInit, Inject, PLATFORM_ID, inject, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

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
export class Header implements OnInit {
  /** @description Controla a visibilidade do menu hambúrguer no mobile */
  isMenuOpen = false;

  /** @description Guarda o nome do item que está ativo no momento */
  activeItem: string = 'Início';

  /** @description Controla se deve mostrar o botão voltar */
  mostrarVoltar = signal(false);

  /** @description Itens de navegação */
  navItems = [
    { label: 'Início', link: '#' },
    { label: 'Sobre', link: '#about' },
    { label: 'Habilidades', link: '#skills' },
    { label: 'Projetos', link: '#projects' },
    { label: 'Experiência', link: '#experience' },
    { label: 'Contato', link: '#contact' },
  ];

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Detecta a seção ativa ao carregar a página
    this.updateActiveSection();

    // Atualiza os dados da rota na inicialização
    this.atualizarDadosRota();

    // Escuta mudanças de rota
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.atualizarDadosRota());
  }

  /** @description Atualiza os dados baseado na rota atual */
  private atualizarDadosRota(): void {
    let rota = this.route;
    while (rota.firstChild) {
      rota = rota.firstChild;
    }
    
    const mostrar = rota.snapshot.data['mostrarVoltar'] || false;
    this.mostrarVoltar.set(mostrar);
  }

  /** @description Volta para a página anterior */
  voltar(): void {
    this.router.navigate(['/']);
  }

  /** @description Detecta qual seção está visível no scroll */
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateActiveSection();
  }

  /** @description Atualiza o item ativo baseado na seção visível */
  private updateActiveSection(): void {
    // Verificamos se estamos no navegador antes de acessar document ou window
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const sections = this.navItems
      .filter(item => item.link.startsWith('#') && item.link !== '#')
      .map(item => ({
        label: item.label,
        element: document.getElementById(item.link.substring(1))
      }))
      .filter(section => section.element !== null);

    const scrollPosition = window.scrollY + 150;

    // Se estiver no topo da página
    if (window.scrollY < 100) {
      this.activeItem = 'Início';
      return;
    }

    // Encontra qual seção está visível
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section.element && section.element.offsetTop <= scrollPosition) {
        this.activeItem = section.label;
        return;
      }
    }
  }

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
