import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPertamaComponent } from './form-pertama.component';

describe('FormPertamaComponent', () => {
  let component: FormPertamaComponent;
  let fixture: ComponentFixture<FormPertamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPertamaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPertamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
