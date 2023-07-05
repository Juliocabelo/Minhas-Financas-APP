import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './common/componentes/toolbar/toolbar.component';
import { MaterialModule } from './shared/material/material.module';
import { FormularioComponent } from './features/entradas/componets/formulario/formulario.component';

import { LOCALE_ID } from '@angular/core'
import localept from '@angular/common/locales/pt'


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FormularioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
