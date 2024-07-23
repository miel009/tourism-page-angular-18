import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinosDetallesComponent } from './destinos-detalles.component';

describe('DestinosDetallesComponent', () => {
  let component: DestinosDetallesComponent;
  let fixture: ComponentFixture<DestinosDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestinosDetallesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
