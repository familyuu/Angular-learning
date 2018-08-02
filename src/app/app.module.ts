import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpComponent } from '../app/httpclient/httpclient.component';
import { DatabindComponent } from '../app/databinging/databind.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpComponent,
    DatabindComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
