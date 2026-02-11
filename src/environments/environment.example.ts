/**
 * @file environment.example.ts
 * @description Template de exemplo para variáveis de ambiente.
 * Este arquivo deve ser copiado como 'environment.ts' e preenchido com chaves reais.
 * @author Felipe Nascimento
 */

/**
 * @description
 * Estrutura de exemplo para configuração de ambiente.
 * Substitua os valores 'SUA_API_KEY_AQUI' pelas credenciais obtidas no painel do EmailJS.
 */
export const environment = {
  /** Define o modo do ambiente */
  production: false,

  /** * @description Espaço reservado para as chaves do serviço de e-mail.
   */
  emailjs: {
    publicKey: 'SUA_API_KEY_AQUI',
    serviceId: 'SEU_SERVICE_ID_AQUI',
    templateId: 'SEU_TEMPLATE_ID_AQUI'
  }
};
