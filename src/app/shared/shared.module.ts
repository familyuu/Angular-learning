import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from './services/services.module';
import { UtilsModule } from './utils/utils.module';
@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    UtilsModule
  ],
  declarations: [],
  exports: [
    ServicesModule,
    UtilsModule
  ]
})
export class SharedModule { }
