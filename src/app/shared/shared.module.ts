import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesModule } from './services/services.module';

import { IfNotDirective } from '../shared/directive/A-test-ng-if-not';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IfNotDirective
  ],
  exports: [
    ServicesModule,
    IfNotDirective
  ]
})
export class SharedModule { }
