import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/address-dashboard', pathMatch: 'full' },
  { path: 'address-dashboard', loadChildren: () => import('./address/address.module').then(m => m.AddressModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
