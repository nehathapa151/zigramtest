import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DrinkslistComponent } from './drinkslist/drinkslist.component';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

import {
  MatInputModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatFormFieldModule,
  MatTabsModule
} from '@angular/material';

import{FormsModule} from '@angular/forms';
import { DrinksDescriptionComponent } from './drinks-description/drinks-description.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DrinkslistComponent,
    DrinksDescriptionComponent,
    
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    MatTabsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
