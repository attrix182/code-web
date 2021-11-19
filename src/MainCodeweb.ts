import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;

export class MainCodeweb extends LitElement {
  @property({ type: String }) code = '';

  render() {
    return html`
      <main>
        <textarea  @input=${this.getTextCode} cols="30" rows="10"></textarea>

        <iframe src="data:text/html;base64,${this.code}" frameborder="0"></iframe>
        
      </main>
    `;
  }

  getTextCode(event: Event) {
    const input = event.target as HTMLInputElement;
    let aux = input.value;
    this.code =   btoa(aux);
  }
}
