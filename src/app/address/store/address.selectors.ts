import { createSelector } from '@ngrx/store';

import { AddressState } from './address.reducer';

export const selectAddressState = (state: { address: AddressState }) =>
  state.address;

export const selectLoadAddressLoading = createSelector(
  selectAddressState,
  (state) => state.loadAddressLoading,
);

export const selectAddAddressLoading = createSelector(
  selectAddressState,
  (state) => state.addAddressLoading,
);

export const selectAddress = createSelector(
  selectAddressState,
  (state) => state.address,
);
