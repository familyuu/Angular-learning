import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiServicesModule } from './api/apiServices.module';
@NgModule({
  imports: [
    CommonModule,
    ApiServicesModule
  ],
  exports: [
    ApiServicesModule
  ]
})
export class ServicesModule { }
