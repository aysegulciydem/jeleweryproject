import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarringsDetailDialogComponent } from './earrings-detail-dialog.component';

describe('EarringsDetailDialogComponent', () => {
  let component: EarringsDetailDialogComponent;
  let fixture: ComponentFixture<EarringsDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarringsDetailDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarringsDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
