import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface para definir cada slide do carrossel
 */
interface HomeSlide {
  greeting: string;
  role: string;
  firstName: string | { type: 'image'; src: string; alt: string };
  lastName: string;
  bio: string;
  image: string;
}

/**
 * @description Página principal do portfólio.
 * Responsável por apresentar a identidade visual e a primeira mensagem ao usuário.
 * @author Felipe Nascimento
 * @date 2026-01-31
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  /** @description Array de slides */
  private readonly slides: HomeSlide[] = [
    {
      role: 'Desenvolvedor Front End',
      greeting: 'Olá, eu sou',
      firstName: 'Felipe',
      lastName: 'Nascimento Alves',
      bio: 'Onde o abstrato ganha forma. Transformo ideias em experiências reais.',
      image: '/images/felipyasha_human_home.png',
    },
    {
      role: 'S-Rank Archer Developer',
      greeting: 'Liberar...',
      firstName: {
        type: 'image',
        src: '/images/felipyasha_header.png',
        alt: 'Youkai Logo',
      },
      lastName: 'All the code on one arrow',
      bio: 'Precisão de mestre, performance letal. O alvo é a fluidez absoluta.',
      image: '/images/felipyasha_youkai_home.png',
    },
  ];

  /** @description Índice do slide atual */
  private currentIndex: number = 0;

  /** @description Referência ao timeout para limpeza */
  private slideTimeout?: ReturnType<typeof setTimeout>;

  constructor(private cdr: ChangeDetectorRef) {}

  /** @description Retorna o slide atual */
  public get currentSlide(): HomeSlide {
    return this.slides[this.currentIndex];
  }

  /** @description Controla a visibilidade para animação */
  public isContentVisible: boolean = true;

  /**
   * @description Verifica se firstName é uma imagem
   */
  public isFirstNameImage(): boolean {
    return typeof this.currentSlide.firstName === 'object' && this.currentSlide.firstName.type === 'image';
  }

  /**
   * @description Retorna firstName como string (para type guard)
   */
  public getFirstNameText(): string {
    return typeof this.currentSlide.firstName === 'string' ? this.currentSlide.firstName : '';
  }

  /**
   * @description Retorna firstName como objeto de imagem (para type guard)
   */
  public getFirstNameImage(): { type: 'image'; src: string; alt: string } | null {
    return typeof this.currentSlide.firstName === 'object' ? this.currentSlide.firstName : null;
  }

  /**
   * @description Inicia a rotação automática ao inicializar o componente
   */
  public ngOnInit(): void {
    this.startAutoRotation();
  }

  /**
   * @description Limpa o timeout ao destruir o componente
   */
  public ngOnDestroy(): void {
    if (this.slideTimeout) {
      clearTimeout(this.slideTimeout);
    }
  }

  /**
   * @description Inicia a rotação automática de slides a cada 10 segundos
   */
  private startAutoRotation(): void {
    this.slideTimeout = setTimeout(() => {
      // Fade out
      this.isContentVisible = false;
      this.cdr.detectChanges();
      
      // Aguarda fade out completar, depois troca o slide e faz fade in
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.isContentVisible = true;
        this.cdr.detectChanges();
        this.startAutoRotation();
      }, 500); // 500ms para completar o fade out
    }, 10000);
  }

  /**
   * @description Navega ou executa a ação de baixar o currículo
   */
  public downloadCV(): void {
    // Lógica de download entrará aqui
  }
}