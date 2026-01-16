
import { Routes } from '@angular/router';
import { LogMealLayoutComponent } from './components/log-meal-layout/log-meal-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LogMealLayoutComponent,
    children: [
      { path: '', redirectTo: 'standard', pathMatch: 'full' },
      { path: 'standard', loadComponent: () => import('./components/standard-input/standard-input.component').then(m => m.StandardInputComponent) },
      { path: 'smart', loadComponent: () => import('./components/smart-input/smart-input.component').then(m => m.SmartInputComponent) },
      { path: 'image', loadComponent: () => import('./components/image-input/image-input.component').then(m => m.ImageInputComponent) },
      { path: 'result', loadComponent: () => import('./components/result/result.component').then(m => m.ResultComponent) },
    ],
  },
];
