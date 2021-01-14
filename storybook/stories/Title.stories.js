import {Title} from './Title';

export default {
  title: 'Example/Title',
  argTypes: {
    type: {
        control: {
          type: "select",
          options: ['h1','h2','h3','h4','h5','h6']
        }
      }
  }
};

const Template = (args) => Title(args);
export const Primary = Template.bind({});
Primary.args = {
    type: "h1",
    text: "Hello World",
    linkURL: "https://www.initialyze.com",
    linkDisabled: false
} 