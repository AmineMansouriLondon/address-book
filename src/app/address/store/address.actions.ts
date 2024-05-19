import { createActionGroup, props } from '@ngrx/store';
import { Address, AddressResponse } from '../../interfaces/address.interface';

export const AddAddressActions = createActionGroup({
  source: 'Add Address',
  events: {
    Add: props<{ address: Address }>(),
    'Add Success': props<{ address: AddressResponse }>(),
    'Add Failure': props<{ error: unknown }>(),
  },
});

export const LoadAddressActions = createActionGroup({
  source: 'Load Address',
  events: {
    Load: props<{ addressId: string }>(),
    'Load Success': props<{ address: Address }>(),
    'Load Failure': props<{ error: unknown }>(),
  },
});
