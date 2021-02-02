import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

class Button extends LitElement {
  static get properties() {
    return {
        id: { type: String },
        linkWithQuery: { type: String },
        accessibilityLabel: { type: String },
        text: { type: String },
        linkTarget : { type: String},
        linkType : { type: String}
    };
  }

  constructor() {
    super();
    this.id = "button1";
    this.linkWithQuery = "www.google.com";
    this.accessibilityLabel = "button1";
    this.text = "button1";
    this.linkType ="a";
    this.linkTarget = "_self";
  }

  render() {
    console.log("Initializing button component ...",this);
    let customElement;
      customElement = `
      <div class="button cmp-button--outline-success">
        <a 
            data-sly-element=${this.linkType}
            data-cmp-category="cmp-button"
            class="cmp-button"
            id=${this.id}
            href=${this.linkWithQuery}
            data-sly-attribute.target=${this.linkTarget}
            aria-label=${this.accessibilityLabel}>
            <span class="cmp-button__text">${this.text}</span>
        </a>
     </div>
      `;
    
    return html`
      ${unsafeHTML(customElement)}
    `;
  }
}

customElements.define('init-wc-button', Button);