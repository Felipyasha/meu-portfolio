/**
 * @interface ExperienceCard
 * @description Estrutura para os dados de trajetoria profissional.
 */
export interface ExperienceCard {
  id?: string;
  role?: string;           // Ex: 'Desenvolvedora Full-Stack Junior'
  company?: string;        // Ex: 'Secretaria de Estado da Saúde...'
  location?: string;       // Ex: 'São Luís, MA'
  period?: string;         // Ex: 'Jan 2024 - Presente'
  description?: string;    // Texto introdutório sobre a atuação
  activities?: string[];   // Lista de bullet points de atividades
  technologies?: string[]; // Tags de tecnologias utilizadas
}