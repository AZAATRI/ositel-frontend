import { Component, OnInit } from '@angular/core';
import { TransactionStatsService } from '../transaction-stats.service';

@Component({
  selector: 'app-transaction-stats',
  templateUrl: './transaction-stats.component.html',
  styleUrls: ['./transaction-stats.component.css']
})
export class TransactionStatsComponent implements OnInit {

  dates : any[];
  stats : any[];
  public valueSave : string = '0';
  constructor(private transactionStats : TransactionStatsService) { }

  ngOnInit() {
    this.transactionStats.getDates().subscribe(
      (dates : any[]) => this.dates = dates
    );
  }
  onChangeDate(value : any){
    if(value != 0){
      value = value.split('-');
      if(value.length === 2){
        this.transactionStats.getTransactionTags(value[0],value[1]).subscribe(
          (stats : any[]) => this.stats = stats
        );
      }
    }
  }

}
