import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuprendasComponent } from './menuprendas.component';

describe('MenuprendasComponent', () => {
  let component: MenuprendasComponent;
  let fixture: ComponentFixture<MenuprendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuprendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuprendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
