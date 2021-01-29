import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

class Button extends LitElement {
  static get properties() {
    return {
        id: { type: String },
        linkWithQuery: { type: String },
        accessibilityLabel: { type: String },
        text: { type: String },
    };
  }

  constructor() {
    super();
    this.id = "button1";
    this.linkWithQuery = "www.google.com";
    this.accessibilityLabel = "button1";
    this.text = "button1";
    
  }

  render() {
    console.log("Initializing button component ...",this);
    let customElement;
      customElement = `
      <div class="button">
        <a class ="cmp-button"
        id=${this.id}
        href=${this.linkWithQuery}
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