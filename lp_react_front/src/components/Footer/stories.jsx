import { Footer } from '.';
export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p> <a href="https://linkedin.com/in/ulissesoliveira2" target="_blank">Feito com <span>❤</span> por Ulisses Oliveira </a></p>`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
