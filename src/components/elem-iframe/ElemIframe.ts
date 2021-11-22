import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';


@customElement('elem-iframe')
export class ElemIframe extends LitElement {
  @property({ type: String }) html = '';
  @property({ type: String }) css = '';
  @property({ type: String }) js = '';

  fullCode = '';

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

  render() {

      this.generateFullCode();

    return html` 
    <main>
    <hr>
      <iframe srcdoc="${this.fullCode}" frameborder="0"></iframe>
    </main>`;
  }
}
