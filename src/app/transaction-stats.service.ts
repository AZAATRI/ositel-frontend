import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TransactionStatsService {

  constructor(private http : Http) { }
  getDates() : Observable<any[]>{
    return this.http.get('http://localhost/ositel-backend/web/app_dev.php/api/transaction/getDates')
                .pipe(map(res => res.json()));
  }
  getTransactionTags(year,month) : Observable<any[]>{
    const params = {
      year: year,
      month: month
    }
    return this.http.get('http://localhost/ositel-backend/web/app_dev.php/api/transaction/transactionStats',{params})
    .pipe(map(res => res.json()));
  }
}
