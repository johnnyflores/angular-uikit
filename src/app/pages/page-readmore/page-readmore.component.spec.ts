import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReadmoreComponent } from './page-readmore.component';

describe('PageReadmoreComponent', () => {
  let component: PageReadmoreComponent;
  let fixture: ComponentFixture<PageReadmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageReadmoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageReadmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
