const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.entityService.findMany("api::page.page", {
      ...query,
      populate: {
        Menu: {
          populate: {
            title_menu: true,
            logo_menu: true,
            link_text: {
              populate: {
                link_title: true,
                url: true,
              },
            },
          },
        },
        sections: {
          populate: {
            title: true,
            description: true,
            image: true,
            text_grid: {
              populate: {
                title: true,
                description: true,
              },
            },
            image_grid: {
              populate: {
                image: true,
              },
            },
            meta_sections: {
              populate: {
                name: true,
                section_id: true,
                background: true,
              },
            },
          },
        },
        Footer: {
          populate: {
            text_footer: true,
          },
        },
      },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));

