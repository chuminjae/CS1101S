/*
// Question 1
function my_map(f, xs){
    return accumulate((x, y) => pair(f(x), y), null, list(1,2,3));
}
my_map(x => x + 1, list(1,2,3));
// Question 2
function remove_duplicates(a){
    return length(a) === 0
           ? a
           : append(list(head(a)), remove_duplicates(filter(x => x !== head(a), tail(a))));
}
function filter(pred, xs){
     return is_null(xs)
            ? null 
            : pred(head(xs))
            ? pair(head(xs), filter(pred, tail(xs)))
            : filter(pred, tail(xs));
}
remove_duplicates(list(1,2,1,3,4,4,5,6,2));
// Question 3
function makeup_amount(x, coins) {
    if (x === 0) {
        return list(null);
    } else if (x < 0 || is_null(coins)) {
         return null;
    } else {
        const combi_A = makeup_amount(x, tail(coins));
        const combi_B = makeup_amount(x - head(coins), tail(coins));
        const combi_C = map(x => pair(head(coins), x), combi_B);
    return append(combi_A, combi_C);
}
} */
function remove_duplicate(lst){
    return accumulate((x, y) => pair(x, remove_all(x, y)), null, lst);
}
remove_duplicate(list(1,2,3,2,1));

function subsets(xs){
    if(is_null(xs)){
        return xs;
    }
    else if(length(xs) === 1){
        return list(list(), xs);
    }
    else{
        const wish = subsets(tail(xs));
        return append(wish, map(x => pair(head(xs, x), wish)));
    }
}
function permutations(s){
     return is_null(s)
            ? list(null)
            : accumulate(append, 
            null, map(x => map(y => pair(x, y), 
            permutations(remove(x,s))), s));
     
 }
 display_list(permutations(list(1,2,3,4)));











