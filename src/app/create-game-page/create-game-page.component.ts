import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GameGeneratorService} from '../shared/services/game-generator.service';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';

@Component({
  selector: 'gn-create-game-page',
  templateUrl: './create-game-page.component.html'
})
export class CreateGamePageComponent {
  title: string;
  instruction: string;
  username: string;
  numPlayers: number;
  items$: FirebaseObjectObservable<any>;


  constructor(private router: Router,
              private urlGenerator: GameGeneratorService,
              private af: AngularFireDatabase) {
    this.instruction = 'You need to provide the number of players and the name';
    this.title = 'Welcome to Guess The Number Game';
    this.items$ = af.object('/games');
  }

  enterNewGame() {
    console.log('Entered new game!');
    // 1. generate new URL
    this.urlGenerator.generateNewGameURL();
    this.router.navigateByUrl(`game/${this.urlGenerator.generateNewGameURL()}`);
  }
}
