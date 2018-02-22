var abs = Math.abs;

function array_fill(i, n, v) {
    var a = [];
    for (; i < n; i++) {
        a.push(v);
    }
    return a;
}

/**
 * Gaussian elimination
 * @param  array A matrix
 * @param  array x vector
 * @return array x solution vector
 */
function gauss(A, x) {

    var i, k, j;

    // Just make a single matrix
    for (i=0; i < A.length; i++) { 
        A[i].push(x[i]);
    }
    var n = A.length;

    for (i=0; i < n; i++) { 
        // Search for maximum in this column
        var maxEl = abs(A[i][i]),
            maxRow = i;
        for (k=i+1; k < n; k++) { 
            if (abs(A[k][i]) > maxEl) {
                maxEl = abs(A[k][i]);
                maxRow = k;
            }
        }


        // Swap maximum row with current row (column by column)
        for (k=i; k < n+1; k++) { 
            var tmp = A[maxRow][k];
            A[maxRow][k] = A[i][k];
            A[i][k] = tmp;
        }

        // Make all rows below this one 0 in current column
        for (k=i+1; k < n; k++) { 
            var c = -A[k][i]/A[i][i];
            for (j=i; j < n+1; j++) { 
                if (i===j) {
                    A[k][j] = 0;
                } else {
                    A[k][j] += c * A[i][j];
                }
            }
        }
    }

    // Solve equation Ax=b for an upper triangular matrix A
    x = array_fill(0, n, 0);
    for (i=n-1; i > -1; i--) { 
        x[i] = A[i][n]/A[i][i];
        for (k=i-1; k > -1; k--) { 
            A[k][n] -= A[k][i] * x[i];
        }
    }

    return x;
}

//Example 

/**
 * Solves 4x = 8
 */
function test_one() {
    $A = [[4]];
    $x = [8];
    $result = gauss($A, $x);
    console.log("one: " + $result);
}

/**
 * Solves this system:
 * x + y = 10
 * 2x + y = 16
 */
function test_two () {
    $A = [[1, 1], [2, 1]];
    $x = [10, 16];
    $result = gauss($A, $x);
    console.log("two: " + $result);

}

/**
 * Solves this system:
 * x + y + z = 6
 * 2x + y + 2z = 10
 * x + 2y + 3z = 14
 */
function test_three () {
    $A = [[1, 1, 1], [2, 1, 2], [1, 2, 3]];
    $x = [6, 10, 14];
    $result = gauss($A, $x);
    console.log("three: " + $result);
}

test_one();
test_two();
test_three();