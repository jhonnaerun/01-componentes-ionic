import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

/**
 * en el ion-tab se implementas las rutas de navegacion de cada tab y la inicial
 */
const routes: Routes = [
  {
    path: 'tab-home',
    loadChildren: () => import('./tab-home/tab-home.module').then( m => m.TabHomePageModule)
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'avatar',
        loadChildren: () => import('../avatar/avatar.module').then( m => m.AvatarPageModule)
      },
      {
        path: 'checkbox',
        loadChildren: () => import('../checkbox/checkbox.module').then( m => m.CheckboxPageModule)
      },
      {
        path: 'card',
        loadChildren: () => import('../card/card.module').then( m => m.CardPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./tab-home/tab-home.module').then( m => m.TabHomePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
