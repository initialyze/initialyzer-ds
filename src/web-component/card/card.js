import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import '../button/button';

class Card extends LitElement {
  static get properties() {
    return {
      assetVariation: { type: String },
      pretitle: { type: String },
      fileReference: {type: String},
      title: { type: String },
      titleType: { type: String },
      description: { type: String },
      variation: { type: String },
      linkEntireCmp: { type: String },
      titleLinkHidden: { type: String },
      linkURL: { type: String },
      actionsEnabled: { type: String },
      template: { type: String },
      linkEntireCard: {},
    };
  }

  constructor() {
    super();
    this.assetVariation = 'Default';
    this.title = 'Card Title';
    this.linkURL = 'https://publish-aem65-int.initialyze.com/';
    this.titleType = 'h1';
    this.description = 'Add some description here...';
    this.variation = 'Default';
    this.pretitle = "News";
    this.fileReference = "/content/dam/aem-initialyzer-docs/en/images/logos/initialyzer-logo-top-monochrome.svg";
    this.linkEntireCard = 'false';
    this.titleLinkHidden = 'true';
    this.actionsEnabled = 'true';
  }

  render() {
    console.log("Initializing card component ...",this.actionsList);
    let customElement;
    // IF LINK DISABLED
    if (this.variation == "Default") {
      customElement = `
      <div class="cmp-card__asset">
        <img src=${this.fileReference}></img>
      </div>
      <div class="cmp-card__content card-body">
        <div class="cmp-card__content-wrapper">
          <h6><span class="cmp-card__eyebrow">${this.pretitle}</span></h6>  
          <h2 class="cmp-card__card-title" data-sly-element="${this.titleType}">
            <a class="cmp-card__title-link" href="${this.linkURL}" data-sly-unwrap="${this.linkEntireCard || !this.linkURL || this.titleLinkHidden}">${this.title}</a>
          </h2>
          <div class="cmp-card__description">${this.description}</div>
          <init-wc-button
            class="cmp-web-button"
            text = "READ MORE"
            linkWithQuery="/content/aem-initialyzer-docs/language-masters/en/home/components/general/button.html"
            linkTarget="_self"
            fileReference=${this.fileReference}
            accessibilityLabel="READ MORE"
          ></init-wc-button>
        </div>
      </div>`;
    } 
    return html`
      ${unsafeHTML(customElement)}
    `;
  }
}

customElements.define('init-wc-card', Card);