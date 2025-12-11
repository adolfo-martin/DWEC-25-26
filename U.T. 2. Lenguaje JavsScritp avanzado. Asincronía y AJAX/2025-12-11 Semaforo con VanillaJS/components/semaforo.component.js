export default class SemaforoComponent extends HTMLElement {

    template= `
        <style>
            .semaforo {
                background-color: black;
                display: inline-flex;
                flex-direction: column;
                gap: 15px;
                padding: 15px;
            }

            .color {
                width: 50px;
                aspect-ratio: 1;
                border-radius: 50%;
                filter: brightness(0.2);
            }

            .color-naranja {
                background-color: orange;
            }

            .color-rojo {
                background-color: red;
            }

            .color-verde {
                background-color: green;
            }

            .encendida {
                filter: brightness(1);
            }
        </style>

        <div class="semaforo">
            <div class="color color-rojo"></div>
            <div class="color color-naranja"></div>
            <div class="color color-verde"></div>
        </div>
    `;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = this.template;

        this.estado = 'rojo';
    }

    connectedCallback() {
        this.shadowRoot.querySelector('.color-rojo').classList.add('encendida');
        this.dispatchEvent(new CustomEvent('colorrojoencendido'));

        setTimeout(() => {
            this.shadowRoot.querySelector('.color-rojo').classList.remove('encendida');
            this.shadowRoot.querySelector('.color-naranja').classList.remove('encendida');
            this.shadowRoot.querySelector('.color-verde').classList.add('encendida');
            this.dispatchEvent(new CustomEvent('colorverdeencendido'));
        }, this.duracionRojo);

        setTimeout(() => {
            this.shadowRoot.querySelector('.color-rojo').classList.remove('encendida');
            this.shadowRoot.querySelector('.color-naranja').classList.add('encendida');
            this.shadowRoot.querySelector('.color-verde').classList.remove('encendida');
            this.dispatchEvent(new CustomEvent('colornaranjaencendido'));
        }, this.duracionRojo + this.duracionVerde);

        setTimeout(() => {
            this.shadowRoot.querySelector('.color-rojo').classList.add('encendida');
            this.shadowRoot.querySelector('.color-naranja').classList.remove('encendida');
            this.shadowRoot.querySelector('.color-verde').classList.remove('encendida');
            this.dispatchEvent(new CustomEvent('colorrojoencendido'));
        }, this.duracionRojo + this.duracionVerde + this.duracionNaranja);
    }

    static get observedAttributes() {
        return ['duracion-rojo', 'duracion-naranja', 'duracion-verde'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'duracion-rojo') {
            this.duracionRojo = parseInt(newValue) || 5;
        } else if (name === 'duracion-naranja') {
            this.duracionNaranja = parseInt(newValue) || 1;
        } else if (name === 'duracion-verde') {
            this.duracionVerde = parseInt(newValue) || 5;
        }

        console.log(`Atributo cambiado: ${name} = ${newValue}`);
    }
}

window.customElements.define('mi-semaforo', SemaforoComponent);