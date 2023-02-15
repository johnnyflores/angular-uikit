import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccordionComponent } from './page-accordion.component';

describe('PageAccordionComponent', () => {
  let component: PageAccordionComponent;
  let fixture: ComponentFixture<PageAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
