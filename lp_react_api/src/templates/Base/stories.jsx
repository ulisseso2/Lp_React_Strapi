import { Base } from '.';

import mock from './mock';
import { GridSection } from '../../components/GridSection';
import mockGrid from '../../components/GridSection/mock';
import mockGridImage from '../../components/GridImage/mock';
import { GridImage } from '../../components/GridImage';

export const mockBase = {
  ...mock,
  children: (
    <>
      <GridSection {...mockGrid} />
      <GridSection {...mockGrid} background />
      <GridSection {...mockGrid} />
      <GridImage {...mockGridImage} />
    </>
  ),
};

export default {
  title: 'Template/Base',
  component: Base,
  args: mockBase,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
