import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AlertModule, BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HttpComponent } from './httpclient/httpclient.component';
import { DatabindComponent } from './databinging/databind.component';
import { ChildComponent } from "./httpclient/childNotifyParentWithPolling/child.component";
import { ChangeDetectComponent } from './change-detect/change-detect.component';
import { HelloComponent } from './change-detect/child.component';
@NgModule({
  declarations: [
    AppComponent,
    HttpComponent,
    DatabindComponent,
    ChildComponent,
    ChangeDetectComponent,
    HelloComponent
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
