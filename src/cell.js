import Component from './component.js';

export default class Cell extends Component {
    static getRootClass(root) {
        return '.cell';
    }

    constructor(root, cellNumber) {
        super(root); 
        this.cellNumber = cellNumber;
        this.root.addEventListener('click', this.handleDomClick.bind(this));
        this.reset();
    }

    handleDomClick(e) {
        this.fire('click', this.cellNumber);        
    }

    makeCircle() {
        this.root.innerText = "O";
    }

    makeCross() {
        this.root.innerText = "X";
    }
    
    isOccupied() {
        if (this.root.innerText != "") {
            return true;
        } else {
            return false;
        }
    }

    reset() {
        this.root.innerText = "";
    }
}