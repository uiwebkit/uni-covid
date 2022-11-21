import { TestBed } from '@angular/core/testing';

import { PageCovidComponent } from './covid.component';


describe('PageCovidComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PageCovidComponent
      ],
    }).compileComponents();
  });

  it('should create page covid', () => {
    const fixture = TestBed.createComponent(PageCovidComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

it(`should have as title 'Covid Report:'`, () => {
  const fixture = TestBed.createComponent(PageCovidComponent);
  const app = fixture.componentInstance;
  expect(app.title).toEqual('Covid Report:');
});

it('should render title', () => {
  const fixture = TestBed.createComponent(PageCovidComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('h1')?.textContent).toContain('Covid Report:');
});
