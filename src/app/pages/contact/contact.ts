/**
 * @file contact.ts
 * @description Componente de contacto utilizando Reactive Forms para validações robustas.
 * @author Felipe Nascimento
 */

import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '@services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  private fb = inject(FormBuilder);
  private emailService = inject(EmailService);

  /** Informações de contacto e redes sociais */
  readonly contactInfo = {
    email: 'felipe_nascalves@hotmail.com',
    github: 'https://github.com/Felipyasha',
    location: 'São Paulo - SP',
  };

  /** Signals para controlo de estado da UI */
  readonly isLoading = signal(false);
  readonly messageSent = signal(false);
  readonly errorMessage = signal('');

  /** Grupo de formulário reactivo */
  contactForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Inicializa o formulário com campos, valores padrão e regras de validação.
   * @private
   */
  private initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  /**
   * Verifica se um campo específico é inválido e se já foi focado pelo utilizador.
   * @param {string} field Nome do campo no formulário.
   * @returns {boolean} True se o campo tiver erros e foi "tocado".
   */
  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  /**
   * Limpa todos os dados do formulário e redefine o estado das validações (erros visuais).
   * @public
   */
  resetForm(): void {
    this.contactForm.reset();
    this.errorMessage.set('');
  }

  /**
   * Processa o envio do formulário, valida os dados e comunica com o EmailService.
   * @public
   * @async
   * @returns {Promise<void>}
   */
  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');

    try {
      const success = await this.emailService.sendEmail(this.contactForm.value);

      if (success) {
        this.messageSent.set(true);
        this.resetForm();
        setTimeout(() => this.messageSent.set(false), 5000);
      } else {
        this.errorMessage.set('Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      this.errorMessage.set('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      this.isLoading.set(false);
    }
  }
}
