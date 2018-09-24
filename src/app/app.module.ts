import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AlertModule, BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HttpComponent } from '../app/httpclient/httpclient.component';
import { DatabindComponent } from '../app/databinging/databind.component';
import { ChildComponent } from "../app/httpclient/childNotifyParentWithPolling/child.component";
import { ChangeDetectComponent } from './change-detect/change-detect.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpComponent,
    DatabindComponent,
    ChildComponent,
    ChangeDetectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
