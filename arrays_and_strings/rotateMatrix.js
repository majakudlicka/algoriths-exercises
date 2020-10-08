function rotateMatrix(matrix) {
    if (matrix.length > 2) return matrix;

    const n = matrix.length -1;

    for (let diagonalIndex = 0; diagonalIndex < Math.floor(matrix.length/2); diagonalIndex++) {
        for (let xIndex = 0; xIndex < (n-2*diagonalIndex); xIndex++) {
            let column = diagonalIndex + xIndex;
            let row = diagonalIndex;

            let curr = matrix[row][column];
            let next = matrix[column][n - row];
            for (let i = 0; i < 4; i++) {
                let nextRow = column;
                let nextCol = n- row;
                next = matrix[nextRow][nextCol];
                matrix[nextRow][nextCol] = curr;
                curr = next;
                column = nextCol;
                row = nextRow;
            }

        }
    }

    return matrix;
}

console.log(rotateMatrix(
    [[1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25 ]]));


