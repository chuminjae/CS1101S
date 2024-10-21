
function d_merge_sort(xs) {
    if(is_null(xs) || is_null(tail(xs))){
        return xs;
    }else{
        const left = head(d_split_list(xs));
        const right = tail(d_split_list(xs));
        const final = d_merge(d_merge_sort(left), 
                              d_merge_sort(right));
        return final;
    }
}

function d_merge_sort(xs) {
    if(is_null(xs) || is_null(tail(xs))){
        return xs;
    }else{
        const lst = d_split_list(xs);
        const left = head(lst);
        const right = tail(lst);
        const final = d_merge(d_merge_sort(left), 
                              d_merge_sort(right));
        return final;
    }
}


// TEST:
const my_list = list(7, 2, 4, 6, 9, 1, 5, 8, 3, 6);
d_merge_sort(my_list);