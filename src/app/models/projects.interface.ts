export interface Project {
  id?: string;
  title?: string;
  thumbnail?: string;
  description?: string; // Texto curto para a Home
  fullDescription?: string; // O "Sobre o Projeto" da página de detalhes
  technologies?: string[];
  githubUrl?: string;

  // --- Campos para o Case Study (Página de Detalhes) ---
  status?: 'Concluído' | 'Em desenvolvimento';
  client?: string; // Ex: "Lojas Marisa" ou "Diebold Nixdorf"
  duration?: string; // Ex: "2 anos" ou "6 meses"

  /** Principais funcionalidades entregues */
  features?: string[];

  /** Passos numerados do desenvolvimento (O seu "How-to") */
  processSteps?: {
    title?: string;
    description?: string;
  }[];

  /** Galeria de capturas de tela */
  gallery?: string[];
}
