import { MenuLogo } from '.';
export default {
  title: 'MenuLogo',
  component: MenuLogo,
  args: {
    text: 'Algo',
    srcImg: 'assets/images/logo_cor_horiz.png',
    link: 'http://localhost.com',
  },
};

export const LogoImg = (args) => {
  return (
    <div>
      <MenuLogo {...args} />
    </div>
  );
};
export const LogoText = (args) => {
  return (
    <div>
      <MenuLogo {...args} />
    </div>
  );
};
LogoText.args = {
  srcImg: '',
};
