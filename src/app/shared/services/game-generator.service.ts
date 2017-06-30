import {Injectable} from '@angular/core';

import * as _ from 'lodash';

@Injectable()
export class GameGeneratorService {
  lenURL: number;

  constructor() {
    this.lenURL = 8;
  }

  generateNewGameURL(length?: number) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    _.range(length || this.lenURL,
      (i) => text += possible.charAt(Math.floor(Math.random() * possible.length)));
    return text;
  }
}
