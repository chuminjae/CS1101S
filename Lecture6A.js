// Insertion sort
function insert(a, lst){
    return is_null(lst)
           ? list(a)
           : a <= head(lst)
           ? pair(a, lst)
           : pair(head(lst), insert(a, tail(lst)));
}
function insertion_sort(lst){
    return is_null(lst)
           ? null
           : insert(head(lst), insertion_sort(tail(lst)));
}

const a = list(1,3,2,1,4,5,6,7,2,32,1);
insertion_sort(a);

// Selection sort
function smallest(lst){
    return accumulate((x, y) => x > y ? y : x, head(lst), tail(lst));
}
function selection_sort(lst){
    if(is_null(lst)){
        return null;
    }
    else{
        const x = smallest(lst);
        return pair(x, selection_sort(remove(x, lst)));
    }
}
selection_sort(a);

// Merge sort
function merge(xs, ys){
    if(is_null(xs)){
        return ys;
    }
    else if(is_null(ys)){
        return xs;
    }
    else{
        const x = head(xs);
        const y = head(ys);
        return x < y 
               ? pair(x, merge(tail(xs), ys))
               : pair(y, merge(xs, tail(ys)));
    }
}
function middle(n){
    return math_floor(n / 2);
}
function take(lst, n){
    return n === 0 
           ? null
           : pair(head(lst), take(tail(lst), n - 1));
}
function drop(lst, n){
    return n === 0
            ? lst
            : drop(remove(head(lst), lst), n - 1);
}
function merge_sort(lst){
    if(is_null(lst) || is_null(tail(lst))){
        return lst;
    }
    else{
        const mid = middle(length(lst));
        return merge(merge_sort(take(lst, mid)),
                     merge_sort(drop(lst, mid)));
    }
}
merge_sort(list(1,2,3));

// Differentiation
function deriv_numeric(f){
    const dx = 0.0001;
    return x => (f(x + dx) - f(x))/ dx;
}
const f = x => x * x + x + 4;
const f_prime = deriv_numeric(f);
f_prime(3);


