import {Component} from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'gn-game-page',
  templateUrl: './game-page.component.html'
})
export class GamePageComponent {
  instruction: string;
  loadingMsg: string;

  nextNumber: number;
  guessType: number;

  constructor(private loadingCtrl: LoadingController) {
    this.instruction = 'You need to guess if the number was even/odd and provide your number';
    this.loadingMsg = 'Wait for your turn';
  }

  submitResults() {
    const loader = this.loadingCtrl.create({
      content: this.loadingMsg,
      duration: 3000
    });
    loader.present();
  }
}
