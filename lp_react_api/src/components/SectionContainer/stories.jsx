import { SectionContainer } from '.';
export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1> SectionContainer </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit sunt
          architecto aspernatur ipsum eum porro, possimus ut, ipsam molestias
          quod doloribus sapiente blanditiis repellendus facilis aliquam
          delectus, quaerat reiciendis quae.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
