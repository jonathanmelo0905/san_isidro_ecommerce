import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelaComponent } from './panela.component';

describe('PanelaComponent', () => {
  let component: PanelaComponent;
  let fixture: ComponentFixture<PanelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
