import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { AddressDashboardComponent } from './address-dashboard/address-dashboard.component';

const routes: Routes = [
  { path: '', component: AddressDashboardComponent },
  { path: ':id', component: AddressDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressRoutingModule { }
