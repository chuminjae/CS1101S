function fractal(pic, n) {
    // your answer here
    return n === 1 ? pic : beside(pic, fractal(stack(pic, pic), n - 1));
}

// Test
show(fractal(make_cross(rcross), 5));


function hook(frac){
    return quarter_turn_right(beside(square, stack_frac(frac, square, blank)));
    // return stack(square, quarter_turn_left(stack_frac(1-frac,blank, square)));
}
// Test
show(hook(1/5));


// copy your hook function from Question 2 here if required
function hook(frac){
     return quarter_turn_right(beside(square, stack_frac(frac, square, blank)));
}
function spiral(thickness, depth) {
    // your answer here
    return depth === 0 ? blank :stack_frac(thickness, hook(thickness / 2), quarter_turn_right(
    spiral(thickness, depth - 1)));
    
}
// Test
show(spiral(1/5, 20));