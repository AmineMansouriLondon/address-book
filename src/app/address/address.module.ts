import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressFormComponent } from './address-form/address-form.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCard } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { AddressDashboardComponent } from './address-dashboard/address-dashboard.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { AddressSearchComponent } from './address-search/address-search.component';

@NgModule({
  declarations: [
    AddressFormComponent,
    AddressDetailsComponent,
    AddressDashboardComponent,
    AddressSearchComponent,
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
    MatError,
    MatFormField,
    MatLabel,
    MatInput,
    MatCard,
    MatButton,
    MatProgressSpinner,
    FormsModule,
  ],
})
export class AddressModule {}
