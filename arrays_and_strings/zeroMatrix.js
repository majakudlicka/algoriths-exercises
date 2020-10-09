function zeroMatrix(matrix) {

    let firstRowHasZero = false;
    let firstColHasZero = false;

    if (matrix[0].includes(0)) {
        firstRowHasZero = true;
    }

    for (let row = 1; row < matrix.length; row++) {
        if (matrix[row][0] === 0) firstColHasZero = true;
        for (let col = 1; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                matrix[0][col] = 'x';
                matrix[row][0] = 'x';
            }
        }
    }

    // loop over rows
    for (let row = 1; row < matrix.length; row++) {
        if (matrix[row][0] === 'x') {
            nullifyRow(matrix, row);
        }
    }

    // loop over cols
    for (let col = 1; col < matrix[0].length; col++) {
        if (matrix[0][col] === 'x') {
            nullifyColumn(matrix, col);
        }
    }

    if (firstRowHasZero) nullifyRow(matrix, 0);
    if (firstColHasZero) nullifyColumn(matrix, 0);

    return matrix;
}

function nullifyColumn(matrix, col) {
    for (let row = 0; row < matrix.length; row++) {
        matrix[row][col] = 0;
    }
}

function nullifyRow(matrix, row) {
    for (let col = 0; col < matrix[0].length; col++) {
        matrix[row][col] = 0;
    }
}

console.log(zeroMatrix([
    [1,0,1,1,1,1,1,1,1,1],
    [1,1,0,1,1,1,1,1,1,1],
    [1,1,1,1,1,0,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,1]
]));
