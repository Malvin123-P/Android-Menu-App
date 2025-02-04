import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'start',
    loadComponent: () => import('./start/start.page').then( m => m.StartPage)
  },
  {
    path: 'adding',
    loadComponent: () => import('./adding/adding.page').then( m => m.AddingPage)
  },
  {
    path: 'translator',
    loadComponent: () => import('./translator/translator.page').then( m => m.TranslatorPage)
  },
  {
    path: 'board',
    loadComponent: () => import('./board/board.page').then( m => m.BoardPage)
  },
  {
    path: 'experience',
    loadComponent: () => import('./experience/experience.page').then( m => m.ExperiencePage)
  },
];
