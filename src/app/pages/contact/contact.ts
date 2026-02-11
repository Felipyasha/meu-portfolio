/**
 * @file contact.ts
 * @description Componente de contacto da SPA com formulário e links sociais.
 * @author Felipe Nascimento
 * @version 1.0.0
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  /** * @description Dados de contacto extraídos do currículo oficial. */
  public readonly contactInfo = {
    email: 'felipe_nascalves@hotmail.com', // 
    phone: '(11) 94569-8515', // 
    github: 'https://github.com/Felipyasha', // 
    location: 'São Paulo - SP' // 
  };

  public contactForm = {
    name: '',
    email: '',
    message: ''
  };

  /** * @description Simula o envio do formulário. */
  public onSubmit(): void {
    console.log('Mensagem enviada:', this.contactForm);
    alert('Mensagem enviada com sucesso! (Simulação)');
  }
}
