import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AddAddressActions, LoadAddressActions } from './address.actions';
import { Address, AddressResponse } from '../../interfaces/address.interface';
import { NotificationService } from '../../services/notifications.service';

@Injectable()
export class AddressEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private notificationService: NotificationService,
  ) {}

  addAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddAddressActions.add),
      mergeMap((action) =>
        this.http.post('http://localhost:5062/address', action.address).pipe(
          map((address: AddressResponse) =>
            AddAddressActions.addSuccess({ address }),
          ),
          catchError((error) => of(AddAddressActions.addFailure({ error }))),
        ),
      ),
    ),
  );

  loadAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadAddressActions.load),
      mergeMap((action) =>
        this.http.get(`http://localhost:5062/address/${action.addressId}`).pipe(
          map((address: Address) =>
            LoadAddressActions.loadSuccess({ address }),
          ),
          catchError((error) => of(LoadAddressActions.loadFailure({ error }))),
        ),
      ),
    ),
  );

  addAddressSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AddAddressActions.addSuccess),
        tap(({ address }) => {
          this.notificationService.showSuccess(`Address added successfully: ${address.addressId}`);
        }),
      ),
    { dispatch: false },
  );

  addAddressFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AddAddressActions.addFailure),
        tap(() => {
          this.notificationService.showError(`Failed to add address`);
        }),
      ),
    { dispatch: false },
  );

  loadAddressFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoadAddressActions.loadFailure),
        tap(() => {
          this.notificationService.showError(`Failed to load address`);
        }),
      ),
    { dispatch: false },
  );
}
