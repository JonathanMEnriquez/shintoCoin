import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

  constructor(private _coinService: CoinService) { }

  coins: number;
  answer = "";
  message = "";
  questions = ['What is the 7th Fibonacci sequence number?'];

  ngOnInit() {
    this.message = "Here you can mine ShintoCoins by being the first to solve the algorithm:"
    this.coins = this._coinService.shareCoins();
  }

  onSubmit() {
    console.log(this.answer);
    if (parseInt(this.answer) == 13) {
      console.log('Correct!');
      this._coinService.addToCoinBase();
      this._coinService.logTransaction('Mined', 1, 1);
      this.coins = this._coinService.shareCoins();
      console.log(this.coins);
      this.answer = "";
    }
  }

}
