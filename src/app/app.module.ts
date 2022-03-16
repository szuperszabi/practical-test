import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuItemDetailsComponent } from './menu-item-details/menu-item-details.component';
import { FoodMenuItemComponent } from './food-menu-item/food-menu-item.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {environment} from '../environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    MenuItemDetailsComponent,
    FoodMenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ...environment.providers,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
