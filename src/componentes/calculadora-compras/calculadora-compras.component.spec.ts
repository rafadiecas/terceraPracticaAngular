import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComprasComponent } from './calculadora-compras.component';

describe('CalculadoraComprasComponent', () => {
  let component: CalculadoraComprasComponent;
  let fixture: ComponentFixture<CalculadoraComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraComprasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
