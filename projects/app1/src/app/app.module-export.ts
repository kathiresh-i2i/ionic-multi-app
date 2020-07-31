import { NgModule } from '@angular/core';

import { App1Component } from './app.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponent} from './first/first.component';
import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'home', component: HomeComponent }
];


@NgModule({
  declarations: [
    App1Component,
    FirstComponent,
    HomeComponent
  ],
  imports: [
    IonicModule.forRoot(),
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: [App1Component]
})
export class App1Module { }

