import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('main-codeweb')
export class MainCodeweb extends LitElement {
  static styles = css`
    .editor {
      padding-top: 1%;
      padding-bottom: 1%;
      display: flex;
      flex-direction: col;

      justify-content: center;
      align-items: center;

      background-color: #0d1117;
    }

    textarea {
      color: #fff !important;
      background-color: rgba(44, 44, 50, 0.9) !important;
      box-shadow: 0 8px 10px 0 rgba(180, 200, 200, 0.15) !important;
      backdrop-filter: blur(11.5px) !important;
      -webkit-backdrop-filter: blur(11.5px) !important;
      border-radius: 10px !important;

      padding: 10px !important;
      font-size: 16px !important;
      font-family: 'Roboto', sans-serif !important;
      font-weight: 300 !important;
      line-height: 1.5 !important;
      overflow: auto !important;
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
  
     
    <div class="editor container-fluid">

        <textarea class="form-control"spellcheck="false" id="html" @input=${this.getHtml} cols="30" rows="10" placeholder="HTML"></textarea>

        <textarea class="form-control"spellcheck="false" id="css" @input=${this.getCss} cols="30" rows="10" placeholder="CSS"></textarea>

        <textarea class="form-control"spellcheck="false" id="js" @input=${this.getJs} cols="30" rows="10" placeholder="JS"></textarea>
      </div>
      <hr>

      <div class="container-fluid">
      <elem-iframe class="frame" html=${this.html} css=${this.css} js=${this.js}></elem-iframe>
      </div>
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
