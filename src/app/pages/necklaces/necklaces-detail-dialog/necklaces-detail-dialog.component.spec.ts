import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecklacesDetailDialogComponent } from './necklaces-detail-dialog.component';

describe('NecklacesDetailDialogComponent', () => {
  let component: NecklacesDetailDialogComponent;
  let fixture: ComponentFixture<NecklacesDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NecklacesDetailDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NecklacesDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
