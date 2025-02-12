import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDashboardComponent } from './address-dashboard.component';

describe('AddressDashboardComponent', () => {
  let component: AddressDashboardComponent;
  let fixture: ComponentFixture<AddressDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddressDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
