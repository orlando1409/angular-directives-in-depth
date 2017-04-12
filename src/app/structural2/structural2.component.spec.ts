import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Structural2Component } from './structural2.component';

describe('Structural2Component', () => {
  let component: Structural2Component;
  let fixture: ComponentFixture<Structural2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Structural2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Structural2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
