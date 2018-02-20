import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(private _coinService: CoinService) { }

  coins: number;
  answer = "";
  message = "";
  owned = "";

  ngOnInit() {
    this.coins = this._coinService.shareCoins();
    this.message = "Current ShintoCoin Value: $1.00";
    this.owned = `Number of ShintoCoins Owned: ${this.coins}`
  }

  onSubmit() {
    console.log(this.answer);
    this._coinService.addToCoinBase(parseInt(this.answer));
    this._coinService.logTransaction('Bought', parseInt(this.answer), parseInt(this.answer));
    this.coins = this._coinService.shareCoins();
    console.log(this.coins);
    this.owned = `Number of ShintoCoins Owned: ${this.coins}`
  }

}
