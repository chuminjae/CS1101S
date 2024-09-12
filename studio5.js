// recursive 
function even_sum(a){
    return is_null(a)
           ? 0
           :is_null(tail(a))
           ? head(a)
           : head(a) + even_sum(tail(tail(a)));
}
function odd_sum(a){
    return is_null(a)
           ? 0
           :is_null(tail(a))
           ? head(a)
           : head(a) + odd_sum(tail(tail(a)));
}

// iterative
function iter_even_sum(a,sum){
     return is_null(a)
           ? sum
           : is_null(tail(a))
           ? sum + head(a) 
           : iter_even_sum(tail(tail(a)), sum + head(a));
}
function iter_odd_sum(a, sum){
    return is_null(a)
           ? sum
           : is_null(tail(a))
           ? sum + head(a) 
           : iter_odd_sum(tail(tail(a)), sum + head(a));
}
function check(a){
    return is_null(a)
           ? is_null
           : pair(even_sum(a), pair(odd_sum(tail(a)), null));
}
function check1(a){
    return is_null(a)
           ? is_null
           : pair(iter_even_sum(a, 0), pair(iter_odd_sum(tail(a), 0), null));
}

check(list(1,2,3,4,5,6));
check1(list(1,2,3));
//check(list(1));
