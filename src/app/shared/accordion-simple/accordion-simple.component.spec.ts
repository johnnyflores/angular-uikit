import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionSimpleComponent } from './accordion-simple.component';

describe('AccordionSimpleComponent', () => {
  let component: AccordionSimpleComponent;
  let fixture: ComponentFixture<AccordionSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
