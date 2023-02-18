import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccordionSimpleComponent } from './page-accordion-simple.component';

describe('PageAccordionSimpleComponent', () => {
  let component: PageAccordionSimpleComponent;
  let fixture: ComponentFixture<PageAccordionSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAccordionSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAccordionSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
