export default class Component {
    constructor(root) {
        this.root = root;
        this.handlers = {};
    }

    static getRootClass(root) {
        return '.component';
    }

    on(event, handler) {
        this.handlers[event] = handler;
    }

    fire(event, ...args) {
        this.handlers[event](this, ...args);
    }
}