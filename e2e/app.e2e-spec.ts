import { OpensancaAngular2Page } from './app.po';

describe('opensanca-angular2 App', () => {
  let page: OpensancaAngular2Page;

  beforeEach(() => {
    page = new OpensancaAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
