import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('main-codeweb')
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
