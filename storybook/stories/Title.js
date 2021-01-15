import { html } from 'lit-html';
import '../../src/web-component/title/title';
/**
 * Primary UI component for user interaction
 */
export const Title = ({ text, type, linkURL, linkDisabled, size, color, alignment}) => {
    return html`
        <div class='${size} ${color} ${alignment} '>
            <title-web-cmp 
                text='${text || 'Initialyzer Title Component'}' 
                type='${type || 'h1'}' 
                linkURL='${linkURL || ''}' 
                linkDisabled=${linkDisabled ? '' : linkDisabled}>
            </title-web-cmp>
        </div>`;
};
