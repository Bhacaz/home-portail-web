import { HomePortailWebPage } from './app.po';

describe('home-portail-web App', () => {
  let page: HomePortailWebPage;

  beforeEach(() => {
    page = new HomePortailWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
