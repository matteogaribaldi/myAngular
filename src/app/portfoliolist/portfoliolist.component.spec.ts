import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliolistComponent } from './portfoliolist.component';

describe('PortfoliolistComponent', () => {
  let component: PortfoliolistComponent;
  let fixture: ComponentFixture<PortfoliolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliolistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfoliolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
