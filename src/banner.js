import Component from './component.js';
import Role from './role.js';
import Turn from './turn.js';

export default class Banner extends Component {
    static getRootClass(root) {
        return '.banner';
    }

    constructor(root) {
        super(root);

        this.roles = root.querySelectorAll('.role');
        this.roleCircle = new Role(this.roles[0]);
        this.roleCross = new Role(this.roles[1]);
        this.turn = new Turn(root.querySelector('.turn'));
    }
    showTurn(which) {
        if (which === 'circle') {
            this.turn.showTurnCross();
        } else {
            this.turn.showTurnCircle();
        }
    }

    showGameOver(which) {
        switch(which) {
            case 'circle':
                this.turn.showGameOverCircle();
                this.roleCircle.showCount('O : ');
                break;
            case 'cross':
                this.turn.showGameOverCross();
                this.roleCross.showCount('X : ');
                break;
            default:
                this.turn.showGameOverDuece();
                break;
        }
    }

    reset() {
        this.turn.showTurnCircle();
        this.roleCircle.reset('O');
        this.roleCross.reset('X');
    }


}