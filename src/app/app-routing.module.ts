import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {MainPageComponent} from './main-page/main-page.component';
import {MonitCardsComponent} from './monit-cards/monit-cards.component';
import {EditCardComponent} from './edit-card/edit-card.component';
import {AddCardComponent} from './add-card/add-card.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'; // if it's need


const appRoutes: Routes = [
  { path: 'main-page', component: MainPageComponent },
  { path: 'monit-cards/:num', component: MonitCardsComponent },
  { path: 'add-card/:id', component: AddCardComponent },
  { path: 'edit-card/:id', component: EditCardComponent },
  { path: '',   redirectTo: '/main-page', pathMatch: 'full' },
  { path: '**', redirectTo: '/main-page'}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: true } // <-- debugging purposes only-->
    ),
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
