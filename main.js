
const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor (matrix){
      this.matrix = matrix
    }

    print(){
      for(let i = 0; i< this.matrix.length ; i++){
        console.log(this.matrix[i].join(''))
      }
    }

    static generateField(height, width){
      const arr = new Array(width);

      for (let i=0; i<height; i++) {
        arr[i] = new Array(width).fill(fieldCharacter); // Creating an array of size 4 and filled of 1
      }
      arr[0][0] = pathCharacter;
         
      return arr
    }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

// myField.print()
console.log(Field.generateField(4, 5))