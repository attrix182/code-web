import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import * as monaco from 'monaco-editor';

@customElement('main-codeweb')
export class MainCodeweb extends LitElement {
  @property({ type: String }) fullCode = '';
  @property({ type: String }) html = '';
  @property({ type: String }) css = '';
  @property({ type: String }) js = '';

  static get styles() {
    return css`
      textarea {
        display: block;
        padding: 10px;
        color: green;
      }
    `;
  }

  render() {
    return html` <main>
      <textarea @input=${this.getHtml} cols="30" rows="10"></textarea>

      <textarea @input=${this.getCss} cols="30" rows="10"></textarea>

      <textarea @input=${this.getJs} cols="30" rows="10"></textarea>

      <iframe srcdoc="${this.fullCode}" frameborder="0"></iframe>
    </main>`;
  }

  getHtml(event: Event) {
    
    const input = event.target as HTMLInputElement;
    this.html = input.value;
    this.generateFullCode();
  }

  getJs(event: Event) {
    const input = event.target as HTMLInputElement;
    this.js = input.value;
  }

  getCss(event: Event) {
    const input = event.target as HTMLInputElement;
    this.css = input.value;
    this.generateFullCode();
  }

  generateFullCode() {
   this.fullCode = `<!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>${this.css}</style>
          </head>
          <body>
            ${this.html}
            <script>${this.js}</script>
          </body>
        </html>`;
  }
}

//srcdoc="${this.code}"
//src="data:text/html;base64,${this.code}"
