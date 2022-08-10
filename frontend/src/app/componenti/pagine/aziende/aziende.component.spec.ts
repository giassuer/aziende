/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AziendeComponent } from './aziende.component';

describe('AziendeComponent', () => {
  let component: AziendeComponent;
  let fixture: ComponentFixture<AziendeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AziendeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AziendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
