// incorrect
const append1 = pair;
append1(list(1,3,5), list(2, 4));
// correct
// order of growth: O(n) Theta
// Here n is length(xs)
// Order of growth in space: O(n) Theta
// Pair + deferred operation
// n + n = 2n
function append2(xs, ys){
    return is_null(xs)
            ? ys
            : pair(head(xs), append2(tail(xs), ys));
}

//이러면 list가 안나옴.
function reverse1(lst){
    return us_nul(lst)  
            ? null
            : pair(reverse1(tail(lst)),head(lst));
}

// n-1에서 1까지의 합.
// theta n^ 2
function reverse2(lst){
    return is_null(lst)
            ? null
            : append2(reverse2(tail(lst)),
                    list(head(lst)));
}

// theta(n) - order of growth
// theta(n) - order of space
// pair function requires n space.
function reverse3(xs){
    function rev(original, reversed){
        return is_null(original)
                ? reversed
                : rev(tail(original).
                       pair(head(original), reversed)) ;             )
    }
    return rev(xs, null);
}


function scale_list(xs, k){
    return is_null(xs)
            ? null
            : pair(k * head(xs), 
                    scale_list(tail(xs), k));
}
function scale_list1(xs, k){
    return map(x => k * x, xs);
}
function square_list1(xs){
    return map(x => x * x, xs);
}
function copy(xs){
    return map(x => x, xs);
}

function square_list(xs, k){
    const square = x => x *x *x;
    return is_null(xs)
            ? null
            : pair(square(head(xs)), 
                    square_list(tail(xs), k));
}

function map(f,xs){
    return is_null(xs)
           ? null
           : pair(f(head(xs)), map(f, tail(xs)));
}


