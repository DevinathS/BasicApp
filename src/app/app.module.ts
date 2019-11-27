import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule,MatCardModule, MatSidenavModule, MatListModule,MatSelectModule, MatButtonModule,MatFormFieldModule } from  '@angular/material';
import { AgGridModule } from '@ag-grid-community/angular';
import { ReactiveFormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { ContactsComponent } from './features/components/contacts/contacts.component';
import { HomeComponent } from './features/components/home/home.component';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
