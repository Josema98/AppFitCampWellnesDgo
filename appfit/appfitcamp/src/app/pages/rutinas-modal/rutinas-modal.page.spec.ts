import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinasModalPage } from './rutinas-modal.page';

describe('RutinasModalPage', () => {
  let component: RutinasModalPage;
  let fixture: ComponentFixture<RutinasModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinasModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinasModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
