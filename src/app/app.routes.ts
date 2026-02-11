import { Routes } from '@angular/router';
import { ProjectDetail } from './pages/projects/project-detail/project-detail';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home-page/home-page').then(m => m.HomePage),
    data: { mostrarVoltar: false }
  },

  { 
    path: 'project/:id', 
    component: ProjectDetail,
    title: 'Detalhes do Projeto',
    data: { mostrarVoltar: true }
  },
  // Rotas futuras para projetos:
  // { 
  //   path: 'projeto/:id', 
  //   loadComponent: () => import('./pages/projeto-detalhe/projeto-detalhe').then(m => m.ProjetoDetalhe)
  // },
];
