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
