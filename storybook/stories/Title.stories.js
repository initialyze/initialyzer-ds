import {Title} from './Title';

export default {
  title: 'Example/Title'
};

const Template = (args) => Title(args);
export const PropertiesDialog = Template.bind({});
PropertiesDialog.args = {
    type: 'h1',
    text: "Hello World",
    linkURL: "https://www.initialyze.com",
    linkDisabled: false
};
PropertiesDialog.argTypes = {
  type: {
    control: {
      type: "select",
      options: ['h1','h2','h3','h4','h5','h6']
    }
  }
};

export const StyleSystemDialog = Template.bind({});
StyleSystemDialog.args = {
  size:'h1',
  color:'text-primary',
  alignment:'text-left',
};
StyleSystemDialog.argTypes = {
  size:{
    control: {
      type: "select",
      options: ['h1','h2','h3','h4','h5','h6']
    }
  },
  color:{
    control: {
      type: "select",
      options: ['text-primary','text-secondary','text-white']
    }
  },
  alignment:{
    control: {
      type: "select",
      options: ['text-left','text-center','text-right']
    }
  },
};