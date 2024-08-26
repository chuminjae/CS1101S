function persian(rune, count) {
   
    const width = quarter_turn_right(stackn(count - 2,quarter_turn_left(rune)));
    const length = stackn(count, rune);
    const middle = make_cross(rune);
    const a1 = 1/(count-1);
    const b1 = (count-1)/ count;
    return beside_frac(b1, beside_frac(a1, length, stack_frac(b1, stack_frac(a1, width, middle), width)), length);

}

// Tests
show(persian(heart, 7));
show(persian(make_cross(rcross), 5));
const paw = from_url("https://i.imgur.com/GJg95B8.png");
show(persian(paw, 5));


 

