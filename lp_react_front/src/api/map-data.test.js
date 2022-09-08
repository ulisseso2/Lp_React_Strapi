import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pagesData = mapData()[0];
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.title).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.main_menu).toEqual({});
    expect(pagesData.sections).toEqual([]);
  });

  it('should map data if there are data', () => {
    const pagesData = mapData([
      {
        footer: 'footer',
        title: 'title',
        slug: 'slug',
        main_menu: { a: 'b' },
        sections: [1, 2, 3, 4],
      },
    ])[0];
    expect(pagesData.footerHtml).toBe('footer');
    expect(pagesData.title).toBe('title');
    expect(pagesData.slug).toBe('slug');
    expect(pagesData.main_menu).toEqual({ a: 'b' });
    expect(pagesData.sections).toEqual([1, 2, 3, 4]);
  });
});
