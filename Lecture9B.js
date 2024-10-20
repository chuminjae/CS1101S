function linear_search(A, v) {
    const len = array_length(A);
    let i = 0;
    while (i < len && A[i] !== v) {
    i = i + 1;
    }
    return (i < len);
}
linear_search([1,2,3,4,5,6,7,8,9], 5);

function binary_search(A, v) {
    function search(low, high) {
    if (low > high) {
        return false;
    } 
    else {
        const mid = math_floor((low + high) / 2);
        return (v === A[mid]) ||
        (v < A[mid]
        ? search(low, mid - 1)
        : search(mid + 1, high));
    }
    }
    return search(0, array_length(A) - 1);
}
binary_search([1,2,3,4,5,6,7,8,9], 8);



function binary_search(A, v) {
    let low = 0;
    let high = array_length(A) - 1;

    while (low <= high) {
        const mid = math_floor((low + high) / 2 );
        if (v === A[mid]) {
            break;
        } else if (v < A[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return (low <= high);
}

binary_search([1,2,3,4,5,6,7,8,9], 8);


function swap(x, y) {
    const temp = x;
    x = y;
    y = temp;
}

const A = [4, 5, 6, 7];
swap(A[0], A[3]);
A; 


function selection_sort(A) {
    const len = array_length(A);

    for (let i = 0; i < len - 1; i = i + 1) {
        let min_pos = find_min_pos(A, i, len - 1);
        swap(A, i, min_pos);
    }
}

function find_min_pos(A, low, high) {
    let min_pos = low;
    for (let j = low + 1; j <= high; j = j + 1) {
        if (A[j] < A[min_pos]) {
            min_pos = j;
        }
    }
    return min_pos;
}

function swap(A, x, y) {
    const temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}

const A = [3, 9, 2, 1, 6, 5, 3, 8];
selection_sort(A);
A;


function insertion_sort(A) {
    const len = array_length(A);
    for (let i = 1; i < len; i = i + 1) {
        let j = i - 1;
        while (j >= 0 && A[j] > A[j + 1]) {
            swap(A, j, j + 1);
            j = j - 1;
        }
    }
}



function insertion_sort2(A) {
    const len = array_length(A);
    for (let i = 1; i < len; i = i + 1) {
        const x = A[i];
        let j = i - 1;
            while (j >= 0 && A[j] > x) {
            A[j + 1] = A[j]; // shift right
            j = j - 1;
            }
        A[j + 1] = x;
        }
}