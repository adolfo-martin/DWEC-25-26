export default class FooterAppComponent extends HTMLElement {
    #template = `
        <footer>
            <div>©2025 Adolfo Martín González. Todos los derechos reservados.</div>
            <div>
                <a href="./index.html">Portada</a>
                <a href="./login.html">login.html</a>
                <a href="./categories.html">Categorías</a>
                <a href="./products.html">Productos</a>
            </div>
        </footer>
    `;

    #shadowRoot = undefined;

    constructor() {
        super();
        this.#shadowRoot = this.attachShadow({mode: 'open'});
        this.#shadowRoot.innerHTML = this.#template;
    }
}

window.customElements.define('footer-app', FooterAppComponent);