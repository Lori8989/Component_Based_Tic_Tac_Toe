import Component from './component.js';
import Banner from './banner.js';
import Grid from './grid.js';
import Reset from './reset.js';

import './main.css';

export default class Main extends Component {

    static getRootClass(root) {
        return '.main';
    }

    constructor(root) {
        super(root);

        this.banner = new Banner(root.querySelector('.banner'));

        this.grid = new Grid(root.querySelector('.grid'));
        this.grid.on('showTurn', this.handleShowTurn.bind(this));
        this.grid.on('showGameOver', this.handleShowGameOver.bind(this));

        this.reset = new Reset(root.querySelector('.reset'));
        this.reset.on('click', this.handleResetClick.bind(this));
    }

    handleShowTurn(firer, which) {
        this.banner.showTurn(which);
    }
    handleShowGameOver(firer, which) {
        this.banner.showGameOver(which);
    }
    handleResetClick(firer) {
        this.grid.reset();
        this.banner.reset();
    }

}

window.onload = function () {
    const body = document.querySelector('body');
    new Main(body);
}