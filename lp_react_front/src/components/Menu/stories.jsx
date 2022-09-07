import { Menu } from '.';
import mockLink from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: mockLink,
    logoData: {
      text: 'MeuLogo',
      link: '#target',
      srcImg: 'assets/images/logo_cor_horiz.png',
    },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
