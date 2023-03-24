import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCarritoComponent } from './icon-carrito.component';

describe('IconCarritoComponent', () => {
  let component: IconCarritoComponent;
  let fixture: ComponentFixture<IconCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconCarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
