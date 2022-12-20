import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pagesData = mapData()[0];
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.title).toBe('');
    expect(pagesData.slug).toBe('');
  });

  it('should map data if there are data', () => {
    const pagesData = mapData([
      {
        footer: 'footer',
        title: 'title',
        slug: 'slug',
      },
    ])[0];
    expect(pagesData.footerHtml).toBe('footer');
    expect(pagesData.title).toBe('title');
    expect(pagesData.slug).toBe('slug');
  });
});
