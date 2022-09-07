import { Textcomponent } from '.';
export default {
  title: 'Textcomponent',
  component: Textcomponent,
  args: {
    children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum est, dignissimos aperiam cupiditate iste odit quidem amet placeat repudiandae, veritatis voluptates reprehenderit saepe expedita aut iure sapiente labore at itaque!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Textcomponent {...args} />
    </div>
  );
};
