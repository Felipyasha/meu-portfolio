import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home-page/home-page').then(m => m.HomePage)
  },
  // Rotas futuras para projetos:
  // { 
  //   path: 'projeto/:id', 
  //   loadComponent: () => import('./pages/projeto-detalhe/projeto-detalhe').then(m => m.ProjetoDetalhe)
  // },
];