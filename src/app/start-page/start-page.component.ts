import {Component} from '@angular/core';

@Component({
  selector: 'gn-start-page',
  templateUrl: './start-page.component.html'
})
export class StartPageComponent {
  title = 'Guess The Number Game';
  username: string;
  numPlayers: number;

  enterNewGame() {
    console.log('Entered new game!');
  }
}
