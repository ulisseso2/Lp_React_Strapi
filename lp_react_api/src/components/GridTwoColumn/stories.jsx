import { GridTwoColumn } from '.';
export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'Hello, World!',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus, cum amet a laboriosam maiores dolorum dicta magnam commodi obcaecati vero dolor repellat labore tempora aperiam beatae delectus nostrum quis`,
    srcImg: 'assets/images/js.jpeg',
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
