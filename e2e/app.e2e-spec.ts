import { TinyappApiPage } from './app.po';

describe('tinyapp-ng App', () => {
  let page: TinyappApiPage;

  beforeEach(() => {
    page = new TinyappApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
