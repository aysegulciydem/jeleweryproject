import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraceletDetailDialogComponent } from './bracelet-detail-dialog.component';

describe('BraceletDetailDialogComponent', () => {
  let component: BraceletDetailDialogComponent;
  let fixture: ComponentFixture<BraceletDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BraceletDetailDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BraceletDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
