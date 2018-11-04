import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from './utils/utils.module';
@NgModule({
  imports: [
    CommonModule,
    UtilsModule
  ],
  declarations: [],
  exports: [
    UtilsModule
  ]
})
export class SharedModule { }
