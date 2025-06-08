import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelinformationComponent } from './personelinformation.component';

describe('PersonelinformationComponent', () => {
  let component: PersonelinformationComponent;
  let fixture: ComponentFixture<PersonelinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonelinformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonelinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
