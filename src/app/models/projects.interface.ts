/**
 * @interface Project
 * @description Define a estrutura de dados para os projetos do portfólio.
 */
export interface Project {
  id?: string;               // Ex: 'e-commerce-angular'
  title?: string;            // Nome do projeto
  thumbnail?: string;        // Caminho da imagem (JPG/PNG/WebP)
  description?: string;      // Texto curto para o card (Lore Ipsum por enquanto)
  fullDescription?: string;  // Conteúdo detalhado para a página de detalhes
  technologies?: string[];   // Lista de techs (ex: ['Angular', 'Tailwind', 'Node.js'])
  githubUrl?: string;       // Link opcional para o repositório
  liveUrl?: string;         // Link opcional para o projeto rodando
}