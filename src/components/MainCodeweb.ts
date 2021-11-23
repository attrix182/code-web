import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('main-codeweb')
export class MainCodeweb extends LitElement {
  static styles = css`
    .editor {
      display: flex;
      flex-direction: col;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    textarea {
      color: #fff;
      background-color: rgba(44, 44, 50, 0.9);
      box-shadow: 0 8px 10px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(11.5px);
      -webkit-backdrop-filter: blur(11.5px);
      border-radius: 10px;

      padding: 10px;
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      line-height: 1.5;
      overflow: auto;
    }

    textarea:focus {
      outline: none;
    }
  `;

  @property({ type: String }) html = '';
  @property({ type: String }) css = '';
  @property({ type: String }) js = '';

  render() {
    return html` <main>
      <div class="editor">

        <textarea spellcheck="false" id="html" @input=${this.getHtml} cols="30" rows="10" placeholder="HTML"></textarea>

        <textarea spellcheck="false" id="css" @input=${this.getCss} cols="30" rows="10" placeholder="CSS"></textarea>

        <textarea spellcheck="false" id="js" @input=${this.getJs} cols="30" rows="10" placeholder="JS"></textarea>
      </div>

      <elem-iframe html=${this.html} css=${this.css} js=${this.js}></elem-iframe>
    </main>`;
  }


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
