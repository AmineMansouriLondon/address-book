import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Address } from '../../interfaces/address.interface';
import {
  selectAddress,
  selectLoadAddressLoading,
} from '../store/address.selectors';
import { LoadAddressActions } from '../store/address.actions';

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.scss'],
})
export class AddressSearchComponent {
  addressId: string;
  address$: Observable<Address | null> = this.store.select(selectAddress);
  loadAddressLoading$: Observable<boolean> = this.store.select(
    selectLoadAddressLoading,
  );

  constructor(private store: Store) {}

  onSearch() {
    if (this.addressId) {
      this.store.dispatch(
        LoadAddressActions.load({ addressId: this.addressId }),
      );
    }
  }
}
