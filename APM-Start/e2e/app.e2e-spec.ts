import { APMPage } from './app.po';

describe('apm App', () => {
  let page: APMPage;

  beforeEach(() => {
    page = new APMPage();
  });

  it(`should display page title as 'Acme Product Manager'`, () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Acme Product Manager');
  });
});
