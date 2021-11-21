import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';


@customElement('elem-textarea')
export class ElemTextarea extends LitElement {

    @property({ type: String }) code = '';

    render() {
        return html` <main>
        safdsfdfds
          <textarea id="html" @input=${this.code} cols="30" rows="10"></textarea>
        </main>`;
        
    }



}