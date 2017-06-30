import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GameGeneratorService} from '../shared/services/game-generator.service';

@Component({
  selector: 'gn-create-game-page',
  templateUrl: './create-game-page.component.html'
})
export class CreateGamePageComponent {
  title: string;
  instruction: string;
  username: string;
  numPlayers: number;

  constructor(private router: Router, private urlGenerator: GameGeneratorService) {
    this.instruction = 'You need to provide the number of players and the name';
    this.title = 'Welcome to Guess The Number Game';
  }

  enterNewGame() {
    console.log('Entered new game!');
    // 1. generate new URL
    this.urlGenerator.generateNewGameURL();
    this.router.navigateByUrl(`game/${this.urlGenerator.generateNewGameURL()}`);
  }
}
