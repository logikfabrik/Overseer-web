import { OverseerAppPage } from './app.po';

describe('overseer-app App', () => {
  let page: OverseerAppPage;

  beforeEach(() => {
    page = new OverseerAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
