var soduku =
    [[0, 6, 0, 1, 0, 4, 0, 5, 0],
    [0, 0, 8, 3, 0, 5, 6, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 1],
    [8, 0, 0, 4, 0, 7, 0, 0, 6],
    [0, 0, 6, 0, 0, 0, 3, 0, 0],
    [7, 0, 0, 9, 0, 1, 0, 0, 4],
    [5, 0, 0, 0, 0, 0, 0, 0, 2],
    [0, 0, 7, 2, 0, 6, 9, 0, 0],
    [0, 4, 0, 5, 0, 8, 0, 7, 0]];

// var possibilities = new Array(81);
var possibilities = new Array(9);
var columns = new Array(9);
var square3X3 = new Array(9);

for (var insideDimension=0; insideDimension<9; insideDimension++) {
  columns[insideDimension] = [];
  possibilities[insideDimension] = [];
  square3X3 = [];
}

function print(e) {
  console.log(e);
}

// Make column by turn array side way
var rowI = 0;
var columnJ = 0;

// function makeColumn(e) {
//   columns[rowI][columnJ] = e;
//   rowI++
//   if (rowI%9 === 0) {
//     columnJ++;
//     rowI = 0;
//   }
// }

function makeColumn(e) {
  columns[columnJ][rowI] = e;
  columnJ++;
  if (columnJ%9 === 0) {
    rowI++;
    columnJ = 0;
  }
}

for (var row=0; row<9; row++) {
  soduku[row].forEach(makeColumn);
}
////^^^^^^^^^^^^^^^////

//Make 3X3
var rowI = 0;
var columnJ = 0;
var squareK = 0;

function make3X3(e) {
  square3X3[columnJ][rowI] = e;
  columnJ++;
  if (columnJ%3 === 0) {
    rowI++;
    columnJ = 0;
  }
}

for (var row=0; row<9; row++) {
  soduku[row].forEach(makeColumn);
}
//^^^^^^^^^^^^^^^////

function addPossibilityCheckRow(row,i) {
  if (soduku[row].indexOf(i) === -1) {
    return i;
  }
}

function addPossibilityCheckColumn(row,i) {
  if (columns[row].indexOf(i) === -1) {
    return i;
  }
}



for (var row=0; row<9; row++) {
  for (var column=0; column<9; column++ ) {
    if (soduku[row][column] === 0) {
      // possibilities[(row*9)+column] = [];
      possibilities[row][column] = [];
      for (var i=1; i<=9; i++) {
        // possibilities[(row*9)+column].push(addPossibilityCheckRow(row,i));
        possibilities[row][column].push(addPossibilityCheckRow(row,i));
        // possibilities[(row*9)+column].push(addPossibilityCheckColumn(row,i));
        possibilities[row][column].push(addPossibilityCheckColumn(row,i));
      }
    }
  }
}
