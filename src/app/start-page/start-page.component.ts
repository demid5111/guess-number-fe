import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'gn-start-page',
  templateUrl: './start-page.component.html'
})
export class StartPageComponent {
  title: string;
  instruction: string;
  username: string;
  numPlayers: number;

  constructor(private router: Router) {
    this.instruction = 'You need to provide the number of players and the name';
    this.title = 'Welcome to Guess The Number Game';
  }

  enterNewGame() {
    console.log('Entered new game!');
    this.router.navigateByUrl('game');
  }
}
