import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

class Card extends LitElement {
  static get properties() {
    return {
      assetVariation: { type: String },
      imageResource: { type:Object},
      pretitle: { type: String },
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
      actionsList: {type : Object}
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
      <div class="cmp-card__content card-body">
        <div class="cmp-card__content-wrapper">
          <h6><span class="cmp-card__eyebrow">${this.pretitle}</span></h6>  
          <h2 class="cmp-card__card-title" data-sly-element="${this.titleType}">
            <a class="cmp-card__title-link" href="${this.linkURL}" data-sly-unwrap="${this.linkEntireCard || !this.linkURL || this.titleLinkHidden}">${this.title}</a>
          </h2>
          <div class="cmp-card__description">${this.description}</div>
          <div class="cmp-card__action-container" data-sly-test="${this.actionsEnabled}" data-sly-list.button="${this.actionsList}">
            <div class="cmp-card__action-item" data-sly-resource="${this.actionsList[button]}"></div>
          </div>
        </div>
      </div>`;
    } 
    return html`
      ${unsafeHTML(customElement)}
    `;
  }
}

customElements.define('card-web-cmp', Card);