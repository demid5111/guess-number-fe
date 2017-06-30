import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'gn-join-game-page',
  templateUrl: './join-game-page.component.html'
})
export class JoinGamePageComponent {
  title: string;
  instruction: string;
  username: string;
  numPlayers: number;

  constructor(private router: Router) {
    this.instruction = 'Press join when you are ready!';
    this.title = 'Welcome to Guess The Number Game';
  }

  enterNewGame() {
    console.log('Entered existing game!');
    this.router.navigateByUrl('game/wefefwegewrgwg');
  }
}
