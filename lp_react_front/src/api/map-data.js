export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const {
      footer = '',
      slug = '',
      title = '',
      sections = [],
      main_menu = {},
    } = data;
    return {
      footerHtml: footer,
      title: title,
      slug: slug,
      main_menu: main_menu,
      sections: sections,
    };
  });
};
