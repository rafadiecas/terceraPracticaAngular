import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaNotasComponent } from './sistema-notas.component';

describe('SistemaNotasComponent', () => {
  let component: SistemaNotasComponent;
  let fixture: ComponentFixture<SistemaNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaNotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
