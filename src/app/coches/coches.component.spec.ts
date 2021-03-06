/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CochesComponent } from './coches.component';

describe('CochesComponent', () => {
  let component: CochesComponent;
  let fixture: ComponentFixture<CochesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CochesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
