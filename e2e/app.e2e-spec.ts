import { Angular2twoPage } from './app.po';

describe('angular2two App', function() {
  let page: Angular2twoPage;

  beforeEach(() => {
    page = new Angular2twoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
