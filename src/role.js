import Component from './component.js';

export default class Role extends Component {
    static getRootClass(root) {
        return '.role';
    }

    constructor(root) {
        super(root);
        this.count = 0;
    }

    reset(which) {
        this.count = 0;
        this.root.innerText = which + " : -";
    }
    showCount (which) {
        this.count++;
        this.root.innerText = which + this.count;
    }

    
}