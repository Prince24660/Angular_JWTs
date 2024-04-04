import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhelmastiComponent } from './khelmasti.component';

describe('KhelmastiComponent', () => {
  let component: KhelmastiComponent;
  let fixture: ComponentFixture<KhelmastiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhelmastiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhelmastiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
