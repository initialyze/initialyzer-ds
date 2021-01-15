import { html } from 'lit-html';
import '../../src/web-component/title/title';

/**
 * Primary UI component for user interaction
 */
export const Title = ({ text, type, linkURL, linkDisabled }) => {
    return html`<title-web-cmp 
        text='${text}' 
        type='${type}' 
        linkURL='${linkURL}' 
        linkDisabled=${linkDisabled ? '' : linkDisabled}>`
};
