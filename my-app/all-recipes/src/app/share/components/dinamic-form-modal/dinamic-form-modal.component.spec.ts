import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicFormModalComponent } from './dinamic-form-modal.component';

describe('DinamicFormModalComponent', () => {
  let component: DinamicFormModalComponent;
  let fixture: ComponentFixture<DinamicFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinamicFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinamicFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
