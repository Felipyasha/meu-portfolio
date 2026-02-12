import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'project/:id',
    renderMode: RenderMode.Client // Isso diz ao Angular: "Não tente gerar isso no build, deixe para o navegador"
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
