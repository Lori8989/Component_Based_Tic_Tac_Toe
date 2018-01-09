import Component from './component.js';
import Cell from './cell.js';

export default class Grid extends Component {
    static getRootClass(root) {
        return '.grid';
    }

    constructor(root) {
        super(root);
        this.cells = [];
        
        const els = root.querySelectorAll('.cell');

        for (let key = 0 ; key < els.length ; key++ ) {
            const cell = new Cell(els[key], key);
            cell.on('click', this.handleCellClick.bind(this), key);
            this.cells.push(cell);
        }
        this.reset();
    }

    reset() {
        this.circleFilled = [];
        this.crossFilled = [];
        this.clickCount = 0;
        for (let els of this.cells) {
            els.reset();
        }            
    }

    handleCellClick(firer, cellNumber) {  
        if (firer.isOccupied() === false) {
            this.clickCount++;
            if ( this.clickCount % 2 === 0) {
                firer.makeCross();
                this.crossFilled.push(cellNumber);
                if (this.checkWin(this.crossFilled)) {
                    this.end('cross');
                    this.crossFilled = [];
                } else if (this.crossFilled.length === 5){
                    //else if duece
                    this.end('duece');
                } else {
                    this.fire('showTurn', 'cross');
                }
                
            } else {
                firer.makeCircle();
                this.circleFilled.push(cellNumber);
                if (this.checkWin(this.circleFilled)) {
                    this.end('circle');
                    this.circleFilled = [];
                } else if (this.circleFilled.length === 5){
                    //else if duece
                    this.end('duece');
                } else {
                    this.fire('showTurn', 'circle');
                }
            }

        } else {}
    }
    end(which) {
        this.fire('showGameOver', which);
        this.reset();        
    }
    

    checkWin(arr) {
        let combination = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        let count = 0;

        for (let i = 0 ; i < combination.length ; i++) {
            for (let j = 0; j < combination[i].length ; j++) {
                for (let els of arr) {
                    if (els === combination[i][j]) {
                        count++;
                        if (count === 3) {
                            return true;
                        }
                    }
                }
            }
            count = 0;        
        }
        
        /*
            var a = arr;
            var c=[];
    for(var i=0;i<a.length;i+=1){
    for(var j=1;j<a.length-1;j++){
        var x=j+1;
        if(i+x<a.length){
            c.push( [ a[i],a[i+j],a[i+x] ] );
        }    
            for(var y=1;y<a.length-1;y++){
                if(i+x+y<a.length){
                    c.push( [ a[i],a[i+j],a[i+x+y] ] );
                }
        }
    }
    }
    var new_c = b.filter(function (b_val) {
    var flag=false;
    c.forEach(function(c_val) {
        if(c_val.toString()===b_val.toString()){
            flag=true;
            return true;
        }
    });
    if(flag)return true;
    });
    console.log(new_c);*/
            
        /* hsinchen solution
        var c = arr.toString();
        var new_c = win.filter(function (win_val) {
            if(c.indexOf(win_val.toString())>-1)return true;
            });
            console.log(new_c);
        */
    }
}