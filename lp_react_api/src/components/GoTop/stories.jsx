import { GoTop } from '.';
export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'Algo',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GoTop {...args} />
    </div>
  );
};
