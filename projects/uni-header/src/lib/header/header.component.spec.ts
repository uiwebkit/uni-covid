import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniHeaderComponent } from './header.component';

describe('UniHeaderComponent', () => {
  let component: UniHeaderComponent;
  let fixture: ComponentFixture<UniHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
