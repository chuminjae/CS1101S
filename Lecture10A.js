// An empty stream
const s1 = null;
// A stream with element 1
const s2 = pair(1, () => null);
// A stream with elements 1, 2, 3
const s3 =
    pair(1,
        () => pair(2,
                () => pair(3,
                    () => null)));
                
function ones_stream() {
    return pair(1, ones_stream);
}

const ones = ones_stream();

head(ones); // 1

//head(tail(ones)()); // 1

//head(tail(tail(ones)())()); // 1
function ones_stream() {
    return pair(1, ones_stream);
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

function eval_stream(s, n) {
    return n === 0
        ? null
        : pair(head(s),
               eval_stream(stream_tail(s), n - 1));
}

function integers_from(n) {
    return pair(n, () => integers_from(n + 1));
}
function stream_tail(stream) {
    return tail(stream)();
}

function stream_ref(s, n) {
    return n === 0
        ? head(s)
        : stream_ref(stream_tail(s), n - 1);
}

function stream_filter(p, s) {
    return is_null(s)
        ? null
        : p(head(s))
            ? pair(head(s),
                   () => stream_filter(p, stream_tail(s)))
            : stream_filter(p, stream_tail(s));
}

function eval_stream(s, n) {
    return n === 0
        ? null
        : pair(head(s),
               eval_stream(stream_tail(s), n - 1));
}

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

//stream_ref(no_fours, 100);

//eval_stream(no_fours, 10);
function replace(s, a, b) {
    return is_null(s) 
        ? null
        : pair((head(s) === a) ? b : head(s),
            () => replace(stream_tail(s), a, b));
}

function more(a, b) {
    return (a > b)
        ? more(1, 1 + b)
        : pair(a, () => more(a + 1, b));
}

const more_and_more = more(1, 1);

const s = replace(more_and_more, 1, 0);

eval_stream(s, 15);

function list_to_inf_stream(xs) { 
    function helper(ys) {
        return is_null(ys)
            ? helper(xs)
            : pair(head(ys), () => helper(tail(ys)));
    }
    return is_null(xs) ? null : helper(xs); 
}

const s = list_to_inf_stream(list(1, 2, 3));

eval_stream(s, 10);
// [1, [2, [3, [1, [2, [3, [1, [2, [3, [1, null]]]]]]]]]]



function add_streams(s1, s2) {
    return is_null(s1)
        ? s2
        : is_null(s2)
        ? s1
        : pair(head(s1) + head(s2),
               () => add_streams(stream_tail(s1), 
                                 stream_tail(s2)));
}

const rep123 = 
    pair(1, 
         () => pair(2, 
                    () => pair(3, 
                               () => rep123)));
                               
eval_stream(add_streams(rep123, rep123), 10);

const fibs = 
    pair(0,
         () => pair(1,
                    () => add_streams(stream_tail(fibs), fibs)));

eval_stream(fibs, 10);

function memo_fun(fun) {
    let already_run = false;
    let result = undefined;

    function mfun() {
        if (!already_run) {
            result = fun();
            already_run = true;
            return result;
        } else {
            return result;
        }
    }
    return mfun;
}

function ms(m, s) {
    display(m);
    return s;
}

const ones = pair(1, () => ones);

const onesA = pair(1, () => ms("A", onesA));

const onesB = pair(1, memo_fun(() => ms("B", onesB)));

//stream_ref(ones, 3);
stream_ref(onesA, 3);
//stream_ref(onesB, 3);

function m_integers_from(n) {
    return pair(n, 
        memo_fun(() => ms("M: " + stringify(n), 
                          m_integers_from(n + 1))));
}

const m_integers = m_integers_from(1);

stream_ref(m_integers, 0);
//stream_ref(m_integers, 1);
//stream_ref(m_integers, 2);
//stream_ref(m_integers, 5);
//stream_ref(m_integers, 5);





