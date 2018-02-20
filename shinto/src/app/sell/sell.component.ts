import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

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
    if (parseInt(this.answer) < this.coins) {
      this._coinService.subtractCoin(parseInt(this.answer));
      this._coinService.logTransaction('Sold', parseInt(this.answer), parseInt(this.answer));
      this.coins = this._coinService.shareCoins();
      console.log(this.coins);
      this.owned = `Number of ShintoCoins Owned: ${this.coins}`
    }
    else {
      this.owned = "You don't have this many coins to sell, G!";
    }
  }

}
