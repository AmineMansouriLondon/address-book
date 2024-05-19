import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAddAddressLoading } from '../store/address.selectors';
import { AddAddressActions } from '../store/address.actions';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit {
  addressForm: FormGroup;

  addAddressLoading$: Observable<boolean> = this.store.select(
    selectAddAddressLoading,
  );

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {
    this.addressForm = this.fb.group({
      addressee: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(1),
        ],
      ],
      street1: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(1),
        ],
      ],
      street2: ['', [Validators.maxLength(50)]],
      town: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(1),
        ],
      ],
      county: ['', [Validators.maxLength(50)]],
      postcode: [
        '',
        [Validators.required, Validators.maxLength(8), Validators.minLength(5)],
      ],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.addressForm.valid) {
      this.store.dispatch(
        AddAddressActions.add({ address: this.addressForm.value }),
      );
    }
  }
}
