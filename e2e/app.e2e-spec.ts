import { GuessNumberPage } from './app.po';

describe('guess-number App', () => {
  let page: GuessNumberPage;

  beforeEach(() => {
    page = new GuessNumberPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
