import { TestBed } from '@angular/core/testing';

import { PageDashboardComponent } from './dashboard.component';


describe('PageDashboardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PageDashboardComponent
      ],
    }).compileComponents();
  });

  it('should create page dashboard', () => {
    const fixture = TestBed.createComponent(PageDashboardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

it(`should have as title 'Dashboard:'`, () => {
  const fixture = TestBed.createComponent(PageDashboardComponent);
  const app = fixture.componentInstance;
  expect(app.title).toEqual('Dashboard:');
});

it('should render title', () => {
  const fixture = TestBed.createComponent(PageDashboardComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('h1')?.textContent).toContain('Dashboard:');
});
