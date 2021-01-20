import {Title} from './Title';
import TitleProps from "./props-json";

export default {
  title: 'Documentation/Title/Playground'
};

const { DIALOG_PROPS, STYLE_SYSTEM_PROPS } = TitleProps;
const Template = (args) => Title(args);
export const Dialog = Template.bind({});
Dialog.args = {
    type: DIALOG_PROPS.TYPES[0],
    text: DIALOG_PROPS.TEXT,
    linkURL: DIALOG_PROPS.LINK_URL,
    linkDisabled: DIALOG_PROPS.LINK_DISABLED,
    size: STYLE_SYSTEM_PROPS.SIZES[0],
    color: STYLE_SYSTEM_PROPS.COLORS[0],
    alignment: STYLE_SYSTEM_PROPS.ALIGNMENTS[0],
};
Dialog.argTypes = {
  type: {
    control: {
      type: "select",
      options: DIALOG_PROPS.TYPES
    }
  },
  size:{
    control: {
      type: "select",
      options: STYLE_SYSTEM_PROPS.SIZES
    }
  },
  color:{
    control: {
      type: "select",
      options: STYLE_SYSTEM_PROPS.COLORS
    }
  },
  alignment:{
    control: {
      type: "select",
      options: STYLE_SYSTEM_PROPS.ALIGNMENTS
    }
  },
};