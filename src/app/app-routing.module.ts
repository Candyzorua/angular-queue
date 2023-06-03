import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './views/admin/admin.component';
import { CustomerComponent } from './views/customer/customer.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
  },
  {
    path: 'customer', component: CustomerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }