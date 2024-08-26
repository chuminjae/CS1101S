import{square, heart, circle,stack, beside, show,blank, ribbon, stack_frac, beside_frac} from "rune";

function moony_1(rune){
    return beside(stack(circle, square), stack(blank, rune));
}
show(moony_1(ribbon));

// recursion은 아래에서 위로 올라가는것이다.
// 각 case를 고려할것.
function moony_2(n){
   return n === 1 ? circle : moony_1(moony_2(n - 1));
}
show(moony_2(5));

function moony_3(n){
    return n === 1 ? circle : beside_frac(1/n, stack_frac(1/n, circle, square), stack_frac(1/n, blank, (mooony_3(n-1))));
}
show(moony_3(5));

// 3 of them are all recursive.
// moony_1은 O(n)
// moony_2는 O()
// moony_3는 O()