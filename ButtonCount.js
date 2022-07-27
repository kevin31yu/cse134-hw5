class ButtonCount extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        const button = document.createElement('button');
        let count = 0;

        button.addEventListener('click', () => {
            count++;
        });

        button.innerHTML = `Times Clicked: ${count}`;
        shadow.appendChild(button);

        setInterval(function () {
            button.textContent = `Times Clicked: ${count}`;
        });
    }
}

customElements.define('button-count', ButtonCount);