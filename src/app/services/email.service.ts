// src/app/services/email.service.ts
import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '@environments/environment';

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  constructor() {
    // Inicializar com Public Key
    emailjs.init(environment.emailjs.publicKey);
  }

  async sendEmail(formData: ContactForm): Promise<boolean> {
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Felipe', // Opcional
        reply_to: formData.email
      };

      const response = await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        templateParams
      );

      console.log('✅ Email enviado!', response.status, response.text);
      return response.status === 200;
    } catch (error: any) {
      console.error('❌ Erro ao enviar email:', error);
      
      // Log detalhado do erro
      if (error.text) {
        console.error('Mensagem de erro:', error.text);
      }
      
      return false;
    }
  }
}
