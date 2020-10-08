// function rotateMatrix(matrix) {
//     const newMatrix = [];
//     const n = matrix.length;
//
//     for (let i = 0; i < n; i++) {
//         newMatrix.push([]);
//     }
//
//     for (let column = 0; column < n; column++) {
//         for (let row = n - 1; row >= 0; row--) {
//             let TopLeft = matrix[row][column];
//             let TopRight = matrix[row][n-column-1];
//             let BottomRight = matrix[n-row-1][n-column-1];
//             let BottomLeft = matrix[n-row-1][column];
//
//             let temp = TopLeft;
//             TopLeft = BottomLeft;
//             BottomLeft = BottomRight;
//             BottomRight = temp;
//
//         }
//     }
//
//     return newMatrix;
// }
function rotateMatrix(matrix) {
    if (!matrix || matrix.length === 0 || matrix.length !== matrix[0].length) {
        throw new Error('invalid matrix');
    }
    if (matrix.length < 2) {
        return matrix; // no need to do anything to rotate a 1,1 matrix
    }

    let len = matrix.length - 1,
        half = Math.floor(matrix.length / 2);
    console.log('half is ', half);
    // loop through diagonal
    for (let start = 0; start < half; ++start) {
        console.log('start is ', start);
        // loop through x axis
        for (let i = 0; i < len - (start * 2); ++i) {
            console.log('i is ', i);
            let row = start,
                column = start + i,
                prev = matrix[row][column];
            console.log({ column, row, prev});

            // loop through all 4 corners
            for (let j = 0; j < 4; ++j) {
                let nextY = column,
                    nextX = len - row,
                    next = matrix[nextY][nextX];
                matrix[nextY][nextX] = prev;
                prev = next;
                column = nextX;
                row = nextY;
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


