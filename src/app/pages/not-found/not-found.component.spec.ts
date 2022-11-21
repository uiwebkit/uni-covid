import { TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './not-found.component';


describe('BlockchainComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PageNotFoundComponent
      ],
    }).compileComponents();
  });

  it('should create page not found', () => {
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

it(`should have as title 'Page Not Found'`, () => {
  const fixture = TestBed.createComponent(PageNotFoundComponent);
  const app = fixture.componentInstance;
  expect(app.title).toEqual('Page Not Found');
});

it('should render title', () => {
  const fixture = TestBed.createComponent(PageNotFoundComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('h1')?.textContent).toContain('Page Not Found');
});
