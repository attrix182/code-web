import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('main-codeweb')
export class MainCodeweb extends LitElement {
  @property({ type: String }) html = '';
  @property({ type: String }) css = '';
  @property({ type: String }) js = '';

  render() {
    return html` <main>
      <textarea id="html" @input=${this.getHtml} cols="30" rows="10"></textarea>

      <textarea @input=${this.getCss} cols="30" rows="10"></textarea>

      <textarea @input=${this.getJs} cols="30" rows="10"></textarea>

      <elem-iframe html=${this.html} css=${this.css} js=${this.js}></elem-iframe>
    </main>`;
  }

  /*   <textarea id="html" @input=${this.getHtml} cols="30" rows="10"></textarea>

  <textarea @input=${this.getCss} cols="30" rows="10"></textarea>

  <textarea @input=${this.getJs} cols="30" rows="10"></textarea> */

  getHtml(event: Event) {
    const input = event.target as HTMLInputElement;
    this.html = input.value;
  }

  getJs(event: Event) {
    const input = event.target as HTMLInputElement;
    this.js = input.value;
  }

  getCss(event: Event) {
    const input = event.target as HTMLInputElement;
    this.css = input.value;
  }
}
