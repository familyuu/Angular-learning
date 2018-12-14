import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServicesModule } from '../shared/services/services.module';
import { ChangeDetectComponent } from './change-detect/change-detect.component';
import { DetectChildComponent } from './change-detect/child.component';
import { DatabindComponent } from './databind/databind.component';
import { UsersComponent } from './users/users.component';
import { LifecycleParentComponent } from './life-cycle/parent.component';
import { LifecycleChildComponent } from './life-cycle/child.component';

@NgModule({
  imports: [ CommonModule, ServicesModule, FormsModule ],
  declarations: [
    ChangeDetectComponent,
    DetectChildComponent,
    DatabindComponent,
    UsersComponent,
    LifecycleParentComponent,
    LifecycleChildComponent
  ]
})
export class ComponentsModule { }
