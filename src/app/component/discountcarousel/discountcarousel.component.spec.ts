import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountcarouselComponent } from './discountcarousel.component';

describe('DiscountcarouselComponent', () => {
  let component: DiscountcarouselComponent;
  let fixture: ComponentFixture<DiscountcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountcarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
