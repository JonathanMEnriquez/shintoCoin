import { Injectable } from '@angular/core';

@Injectable()
export class CoinService {

  constructor() { }

  coins = 0;

  transactions = [];

  shareCoins() {
    return this.coins;
  }

  addToCoinBase(num = 1) {
    this.coins += num;
  }

  subtractCoin(num = 1) {
    this.coins -= num;
  }

  logTransaction(action: String, amount: number, value: number) {
    let newTransaction = {
      id: Math.floor(Math.random() * 10000 + 1),
      action: action,
      amount: amount,
      value: value
    }
    this.transactions.push(newTransaction);
  }

  getTransactions() {
    return this.transactions;
  }
}
