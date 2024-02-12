import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsadecomprasComponent } from './bolsadecompras.component';

describe('BolsadecomprasComponent', () => {
  let component: BolsadecomprasComponent;
  let fixture: ComponentFixture<BolsadecomprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolsadecomprasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolsadecomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
