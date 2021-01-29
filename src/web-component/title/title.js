import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

/**
 * A text field web component
 * @cssprop [Alignments=text-left] - Controls the alignment of the title i.e. left, right, center
 * @cssprop [Sizes=h1] - Controls the sizes of the title i.e. h1 to h6
 * @cssprop [Colors=text-primary] - Controls the colors of the title i.e. text-primary,text-secondary,etc.,
 */
class Title extends LitElement {
  static get properties() {
    return {
      text: { type: String },
      type: { type: String },
      linkDisabled: { type: Boolean },
      linkURL: { type: String },
    };
  }

  constructor() {
    super();
    this.text = 'Title';
    this.type = 'h1';
    this.linkDisabled = "false";
    this.linkURL = 'https://www.initialyze.com';
  }

  render() {
    console.log("Initializing title component ...");
    let customElement;
    // IF LINK DISABLED
    if ((this.linkURL == "") || this.linkDisabled != "false") {
      customElement = `<${this.type} class='cmp-title__text'>${this.text}</${this.type}>`;
    } else {
      // ELIF LINK ENABLED
      customElement = `<${this.type} class='cmp-title__text'>
            <a class='cmp-title__link' href='${this.linkURL}'>
                ${this.text}
            </a>
        </${this.type}>`;
    }
    return html`
      ${unsafeHTML(customElement)}
    `;
  }
}
customElements.define('title-web-cmp', Title);
