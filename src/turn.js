import Component from './component.js';

export default class Turn extends Component {
    static getRootClass(root) {
        return '.turn';
    }
    constructor(root) {
        super(root);
    }
    showTurnCircle() {
        this.root.innerText = "輪到 O 了";
    }
    showTurnCross() {
        this.root.innerText = "輪到 X 了";
    }
    showGameOverCircle() {
        this.root.innerText = " O 贏了！輪到 O 了";
    }
    showGameOverCross() {
        this.root.innerText = " X 贏了！輪到 O 了";
    }
    showGameOverDuece() {
        this.root.innerText = " 沒輸沒贏！輪到 O 了";
    }
}