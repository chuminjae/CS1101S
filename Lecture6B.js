function cond(x, y, z) {
    if (x) { 
        return y;
    } 
    else{
        return z; 
        
    }
}
// alternative
function cond(x, y, z) {
    if (x){ 
        return y(); 
    
    } else { 
        return z(); 
        
    }
}
function f(x){
    return () => x + 1;
}
const y = f(99);
y(); // delay compulation


function sum_primes(a, b) {
    function iter(count, accum) {
        if (count > b) {
            return accum;
        } else if (is_prime(count)) {
            return iter(count + 1, count + accum);
        } else {
            return iter(count + 1, accum);
        }
    }
    return iter(a, 0);
}

function stream_tail(stream) {
    return tail(stream)();
}

function enum_stream(low, hi) {
    return low > hi
        ? null
        : pair(low, () => enum_stream(low + 1, hi));
}

const s = enum_stream(1, 100);

//head(s); // 1

//head(stream_tail(s)); // 2

head(stream_tail(stream_tail(s))); // 3
// Alternative
function sum_primes(a, b) {
    return accumulate(
        (x, y) => x + y,
        0,
        filter(is_prime, enum_list(a, b))
    );
}

function ones_stream() {
    return pair(1, ones_stream);
}

const ones = ones_stream();

head(ones);
function square(x) {
    return x * x;
}

function smallest_divisor(n) {
    return find_divisor(n, 2);
}
function find_divisor(n, test_divisor) {
    return square(test_divisor) > n
           ? n
           : divides(test_divisor, n)
           ? test_divisor
           : find_divisor(n, test_divisor + 1);
}
function divides(a, b) {
    return b % a === 0;
}

function is_prime(n) {
    return n === 1 ? false : n === smallest_divisor(n);
}

function stream_tail(stream) {
    return tail(stream)();
}

function enum_stream(low, hi) {
    return low > hi
        ? null
        : pair(low, () => enum_stream(low + 1, hi));
}

function stream_ref(s, n) {
    return n === 0
        ? head(s)
        : stream_ref(stream_tail(s), n - 1);
}

function stream_map(f, s) {
    return is_null(s)
        ? null
        : pair(f(head(s)),
               () => stream_map(f, stream_tail(s)));
}

function stream_filter(p, s) {
    return is_null(s)
        ? null
        : p(head(s))
            ? pair(head(s),
                   () => stream_filter(p, stream_tail(s)))
            : stream_filter(p, stream_tail(s));
}

/*
head(tail(filter(
    is_prime,
    enum_list(10000, 1000000)
)));
*/

head(stream_tail(stream_filter(
    is_prime,
    enum_stream(10000, 1000000)
)));

function stream_tail(stream) {
    return tail(stream)();
}

function stream_ref(s, n) {
    return n === 0
        ? head(s)
        : stream_ref(stream_tail(s), n - 1);
}

function integers_from(n) {
    return pair(n, () => integers_from(n + 1));
}

const integers = integers_from(1);

//stream_ref(integers, 0); // 1

//stream_ref(integers, 10); // 11

stream_ref(integers, 99); // 100

function integers_from(n) {
    return pair(n, () => integers_from(n + 1));
}

const integers = integers_from(1);

function is_divisible(x, y) {
    return x % y === 0;
}

const no_fours = 
    stream_filter(
        x => !is_divisible(x, 4),
        integers
    );

stream_ref(no_fours, 3);

//stream_ref(no_fours, 100)
function eval_stream(s, n) {
    return n === 0
    ? null
    : pair(head(s),
    eval_stream(stream_tail(s), n - 1));
}

