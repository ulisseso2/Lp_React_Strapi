import { mapMenu } from './map-menu';
describe('map menu', () => {
  it('should return a prefired object if no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
  });
});
