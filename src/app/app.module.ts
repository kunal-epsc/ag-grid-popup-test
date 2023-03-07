import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogOneComponent } from './dialog-one/dialog-one.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogTwoComponent } from './dialog-two/dialog-two.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import'ag-grid-enterprise'; 

@NgModule({
  declarations: [
    AppComponent,
    DialogOneComponent,
    DialogTwoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AgGridModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
