import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, Observable, Subject, Subscription } from 'rxjs';
import { PortfolioService } from '../service/portfolio.service';
import { IPortfolio } from './portfolio';

@Component({
  selector: 'app-portfoliolist',
  templateUrl: './portfoliolist.component.html',
  styleUrls: ['./portfoliolist.component.css']
})
export class PortfoliolistComponent implements OnInit {

  portfolioList: IPortfolio[] = [];
  portfolios$: Observable<IPortfolio[]> | undefined;
  private errorMessageSubject = new Subject<string>();
  sub!: Subscription;
  errorMessage = '';

  constructor(private portfolioService: PortfolioService) { }

  // 
  
  ngOnInit(): void {
    this.portfolios$ = this.portfolioService.getPortfolios()
    .pipe(
      catchError(err => {
        this.errorMessageSubject.next(err);
        return EMPTY;
      })
    )
  }

}
