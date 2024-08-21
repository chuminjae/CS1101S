import{show, stack, heart, stack_frac, sail} from "rune";
show(stack_frac(2/3,heart,sail)); // 2/3을 heart에 줌
show(stack_frac(1/3, heart, stack_frac(1/2, heart,heart))); // 1/3배분하면 2/3남고 다시 반씩  나눠서 
// heart에 배분
show(stack_frac(1/4, heart, stack_frac(1/3, heart, stack_frac(1/2, heart, heart))));
function square(x){
    return x * x;
}


function stackn(n, rune){
    return n === 1 ? rune: stack_frac(1/n, rune, stackn(n-1, rune));
}
show(stackn(3, heart));

// normal order  recursive process
function repeat_pattern1(n, pat, init){
    return n === 0 ? init : pat(repeat_pattern1(n-1, pat, init));
}
// applicative order iterative process
function repeat_pattern2(n, pat, val){
    return n === 0 ? val : repeat_pattern2(n-1, pat, pat(val));
}
repeat_pattern1(3, square, 2);
repeat_pattern2(3, square, 2);

// normal order recursive process
function factorial1(n){
    return n === 0 ? 1: n * factorial1(n - 1);
}

// applicative order iterative process
function iter(product, counter, n){
    return counter > n ? product : iter(counter * product, counter + 1, n);
}
function factorial2(n){
    return iter(1,1, n);
}

// normal order recursive process
function fib1(n){
    return n <= 1 ? n : fib1(n-1) + fib1(n - 2);
}
fib1(11);

// applicative order iterative process
function fib_iter(a,b, count){
    return count ===  0 ? b : fib_iter( a+b, a, count - 1);
    
}
function fib2(n){
    return fib_iter(1,0, n);
    
}
fib2(11);


