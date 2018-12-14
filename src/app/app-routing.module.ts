import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ChangeDetectComponent } from './components/change-detect/change-detect.component';
import { LifecycleParentComponent } from './components/life-cycle/parent.component';
import { DatabindComponent } from './components/databind/databind.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'changedetect', component: ChangeDetectComponent },
  { path: 'lifecycle', component: LifecycleParentComponent},
  { path: 'databind', component: DatabindComponent },
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: '/changedetect', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes, { enableTracing: true, useHash: true })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
