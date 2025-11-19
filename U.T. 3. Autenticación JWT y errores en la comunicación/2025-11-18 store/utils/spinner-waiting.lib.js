export function openSpinner() {
    const nDialog = document.createElement('dialog');
    nDialog.innerHTML = styles;
    nDialog.classList.add('spinner-waiting');
    document.body.appendChild(nDialog);
    document.querySelector('dialog.spinner-waiting').showModal();
}

export function closeSpinner() {
    const nDialog = document.querySelector('dialog.spinner-waiting');
    nDialog.close();
    document.body.removeChild(nDialog);
}

const styles = `
    <style>
        .spinner-waiting {
            position: absolute;
            inset: 0;
            margin: auto;
            width: 200px;
            /*height: 120px;*/
            overflow: visible;
            border: none;

            &::before, &::after {
                content: "";
                position: absolute;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                top: 0;
                bottom: 0;
                margin: auto;
            }

            &::before {
                animation-name: move-red, perspective-red;
                animation-duration: 1s, 2s;
                animation-iteration-count: infinite;
                animation-direction: alternate, normal;
                animation-fill-mode: both;
                animation-timing-function: linear;
                background-color: orange;
            }

            &::after {
                background-color: blue;
                animation-name: move-red, perspective-red;
                animation-duration: 1s, 2s;
                animation-iteration-count: infinite;
                animation-direction: alternate-reverse, reverse;
                animation-fill-mode: both;
                animation-timing-function: linear;
            }

        }

        @keyframes move-red {
            from {left: 5%;}
            to {left: 70%;}
        }

        @keyframes perspective-red {
            0% {
                scale: 1;
                z-index: 2;
            }
            25% {
                scale: 2;
                z-index: 2;
            }
            50% {
                scale: 1;
                z-index: 1;
            }
            75% {
                scale: 0.5;
                z-index: 1;
            }
            100%{
                scale: 1;
            }
        }
    </style>
`;