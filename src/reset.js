import Component from './component.js';

export default class Reset extends Component {
    static getRootClass(root) {
        return '.reset';
    }

    constructor(root){
        super(root);
        this.root.addEventListener('click', this.handleDomClick.bind(this));
    }
    handleDomClick() {
        this.fire('click');
    }
}