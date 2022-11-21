import { TestBed } from '@angular/core/testing';

import { PageAuthComponent } from './auth.component';


describe('PageAuthComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PageAuthComponent
      ],
    }).compileComponents();
  });

  it('should create page auth', () => {
    const fixture = TestBed.createComponent(PageAuthComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

it(`should have as title 'Authorization:'`, () => {
  const fixture = TestBed.createComponent(PageAuthComponent);
  const app = fixture.componentInstance;
  expect(app.title).toEqual('Authorization:');
});

it('should render title', () => {
  const fixture = TestBed.createComponent(PageAuthComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('h1')?.textContent).toContain('Authorization:');
});
