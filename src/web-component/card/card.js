import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

class Card extends LitElement {
  static get properties() {
    return {
      assetVariation: { type: String },
      imageResource: {},
      preTitle: { tyoe: String },
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
      actionsList: {}
    };
  }

  constructor() {
    super();
    this.assetVariation = 'Default';
    this.title = 'Card Title';
    this.description = 'Add some description here...';
    this.variation = 'Default';
    this.linkEntireCard = 'false';
    this.titleLinkHidden = 'true';
    this.actionsEnabled = 'true';
  }

  render() {
    console.log("Initializing card component ...");
  }
}

customElements.define('card-web-cmp', Card);