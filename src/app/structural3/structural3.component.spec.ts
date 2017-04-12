import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Structural3Component } from './structural3.component';

describe('Structural3Component', () => {
  let component: Structural3Component;
  let fixture: ComponentFixture<Structural3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Structural3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Structural3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
