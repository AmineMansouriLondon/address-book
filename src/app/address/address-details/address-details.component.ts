import { Component, Input } from '@angular/core';
import { Address } from '../../interfaces/address.interface';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrl: './address-details.component.scss',
})
export class AddressDetailsComponent {
  @Input() address: Address;
}
