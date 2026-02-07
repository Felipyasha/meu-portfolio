import { Routes } from '@angular/router';
import { Home } from './pages/home/home';




export const routes: Routes = [
 // Apenas a rota raiz que carrega o componente pai (Home)
  { path: '', component: Home },
  
  // Caso o usuário digite qualquer coisa errada, ele volta para a Home
  { path: '**', redirectTo: '' }
];