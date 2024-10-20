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
function make_search(A){
    return x=> binary_search(A, x);
}
function access(x, l){
    if(x === 1){
        return head(l);
    }
    else{
        return access(x-1, tail(l));
    }
}
function access1(x, l){
    if(x === 1){
        return l;
    }
    else{
        return access1(x-1, tail(l));
    }
}

function swap_list(a, b, l){
    const tmp = access(a, l);
    set_head(access1(a, l), access(b, l));
    set_head(access1(b, l), tmp);
}

function bubblesort_List(L){
    const len = length(L);
    for(let i = len; i >= 2; i = i- 1){
        for(let j = 1; j < i; j = j + 1){
            if(access(j, L) > access(j + 1, L)){
                swap_list(j, j + 1, L);
            }
        }
    }
}
const LL = list(3,2,1,4, 5);
bubblesort_List(LL);
LL;