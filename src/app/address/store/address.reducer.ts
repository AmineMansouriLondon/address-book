import { createReducer, on } from '@ngrx/store';
import { AddAddressActions, LoadAddressActions } from './address.actions';
import { Address } from '../../interfaces/address.interface';

export interface AddressState {
  loadAddressLoading: boolean;
  addAddressLoading: boolean;
  address: Address | null;
}

export const initialState: AddressState = {
  loadAddressLoading: false,
  addAddressLoading: false,
  address: null,
};

export const addressReducer = createReducer(
  initialState,

  on(AddAddressActions.add, (state) => ({
    ...state,
    addAddressLoading: true,
  })),

  on(AddAddressActions.addSuccess, AddAddressActions.addFailure, (state) => ({
    ...state,
    addAddressLoading: false,
  })),

  on(LoadAddressActions.load, (state) => ({
    ...state,
    loadAddressLoading: true,
    address: null,
  })),

  on(
    LoadAddressActions.loadSuccess,
    LoadAddressActions.loadFailure,
    (state) => ({
      ...state,
      loadAddressLoading: false,
    }),
  ),

  on(LoadAddressActions.loadSuccess, (state, { address }) => ({
    ...state,
    address,
  })),
);
