import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private _coinService: CoinService) { }

  transactions = [];

  ngOnInit() {
    this.transactions = this._coinService.getTransactions();
    console.log(this.transactions);
  }

}
