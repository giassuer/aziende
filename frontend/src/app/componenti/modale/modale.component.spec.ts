/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModaleComponent } from './modale.component';

describe('ModaleComponent', () => {
  let component: ModaleComponent;
  let fixture: ComponentFixture<ModaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
