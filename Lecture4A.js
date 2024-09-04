/*
function pair(x, y){
    component => component === 0 ? x : y;
}
function head(p){
    return p(0);
}
function tail(p){
    return p(1);
} */

const pair = (x,y) => f => f(x, y);
const p = pair(1,2);   // p = f => f(1,2);
// f => f(1,2) ((x,y) => x)  // answer is 1
const head = p => p((x, y) => x);
const tail = p => p((x,y) => y);
head(p);
function gcd(a, b){
    return b === 0 ? a : gcd(b, a % b);
}
// rational number case study
// Constructor
function make_rat(n, d){
    const g = gcd(n, d);
    return pair(n / g, d /g);
}

// Selector
function numer(x){
    return head(x);
}
function denom(x){
    return tail(x);
}
function add_rat(x, y){
    return make_rat(numer(x) * denom(y) + numer(y) * denom(x), denom(x) * denom(y));
}
function sub_rat(x, y){
    return make_rat(numer(x) * denom(y) - numer(y) * denom(x), denom(x) * denom(y));
}
function mul_rat(x, y){
    return make_rat(numer(x) * numer(y), denom(x) * denom(y));
}
function div_rat(x, y){
    return make_rat(numer(x) * denom(y), denom(x) * numer(y));
}
function equal_rat(x, y){
    return numer(x) * denom(y) === numer(y) * denom(x);
}
function rat_to_string(x){
    return stringify(numer(x)) + " / " + stringify(denom(x));
}
const one_half = make_rat(1,2);
const one_third = make_rat(1,3);
display(rat_to_string(mul_rat(one_half, one_third)));
display(rat_to_string(add_rat(one_third, one_third)));

/*
// Making lists with pairs
pair(pair(100,50), pair(20, pair(10,5)));
// Principle ensure that head(p) always has the data
// Tail always have the remaing, elements
const denoms = pair(100, pair(50, pair(20, 10)));
// Empty List null
// A list is either null or a pair whose tail is a list
const my_list = null;
const your_list = pair(8, null);
const first_denomination = pair(100, pair(50, pair(20, pair(10, pair(5, null)))));
head(denoms) // 100
head(tail(denoms)) // 50
head(tail(tail(denoms))) // 20 */


// Source 2
/*
pair(x, y);
is_pair(p);
is_null(xs);
head(p);
tail(p);
list(x1, x2, x3); */
const a = list(100, 50, 20, 10, 5);

// Box notation
/*
pair(x, y) is printed as [x, y]
empty lists are printed as null
display_list nicely formatted and printed
*/

draw_data(pair(1, pair(2, pair(3, null))));
function lenght(a){
    return is_null(a) ? 0 : 1+ lenght(tail(a));
}
function lenght_iter(a){
    function len(ys, counted_so_far){
        return is_null(ys) 
               ? counted_so_far
               : len(tail(ys), counted_so_far + 1);
    }
    return len(xs, 0);
}