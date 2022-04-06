import { Dummy } from '.';
export default {
  title: 'Dummy',
  component: Dummy,
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
      <Dummy {...args} />
    </div>
  );
};
