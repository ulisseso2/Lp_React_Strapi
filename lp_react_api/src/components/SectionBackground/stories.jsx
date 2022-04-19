import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer';
export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <SectionContainer>
        <div>
          <h1> Section Background</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            repellat a, consequatur alias exercitationem odio blanditiis
            quibusdam minima at voluptates molestiae, velit, voluptate delectus
            doloremque? Nulla quae non itaque vitae?
          </p>
        </div>
      </SectionContainer>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
