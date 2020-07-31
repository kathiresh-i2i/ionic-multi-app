import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { App1Component } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { FirstComponent } from './first/first.component';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  { path: '', component: FirstComponent }
];


@NgModule({
  declarations: [
    App1Component  
  ],
  imports: [
    IonicModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [App1Component]
})
export class AppModule { }
