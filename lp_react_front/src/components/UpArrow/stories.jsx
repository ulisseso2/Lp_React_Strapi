import { UpArrow } from '.';
export default {
  title: 'UpArrow',
  component: UpArrow,
  args: {
    children: 'Algo',
  },
};

export const Template = (args) => {
  return (
    <div>
      <UpArrow {...args} />
    </div>
  );
};
