import { Base } from '.';

import mock from './mock';
import { GridSection } from '../../components/GridSection';
import mockGrid from '../../components/GridSection/mock';
export default {
  title: 'Template/Base',
  component: Base,
  args: {
    ...mock,
    children: (
      <>
        <GridSection {...mockGrid} />
        <GridSection {...mockGrid} background />
        <GridSection {...mockGrid} />
        <GridSection {...mockGrid} background />
      </>
    ),
  },
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
