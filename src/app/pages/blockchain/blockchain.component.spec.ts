import { TestBed } from '@angular/core/testing';

import { PageBlockchainComponent } from './blockchain.component';


describe('PageBlockchainComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PageBlockchainComponent
      ],
    }).compileComponents();
  });

  it('should create page blockchain', () => {
    const fixture = TestBed.createComponent(PageBlockchainComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

it(`should have as title 'Blockchain Report:'`, () => {
  const fixture = TestBed.createComponent(PageBlockchainComponent);
  const app = fixture.componentInstance;
  expect(app.title).toEqual('Blockchain Report:');
});

it('should render title', () => {
  const fixture = TestBed.createComponent(PageBlockchainComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('h1')?.textContent).toContain('Blockchain Report:');
});
