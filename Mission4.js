// Question 1
// Part 1
// your answer here (keep your answer commented)
// unit_line_at : (Number) -> Curve

// Part 2
function vertical_line(pt, length) {
    // your answer here
    return t => make_point(x_of(pt), y_of(pt) + t * length);
}


// Part 3
// your answer here (keep your answer commented)
// vertical_line : (Point, Number) -> Curve


// Part 4
// your answer here
draw_connected_2d(200)(vertical_line(make_point(0.5,0.25), 0.5));

// Question 2
function three_quarters(pt) {
    // your answer here
    return t => make_point(math_cos((3/2) * math_PI * t) + 
                x_of(pt), math_sin((3/2) * math_PI* t) + y_of(pt));
}
// Test
draw_connected_2d(200)(three_quarters(make_point(0.5, 0.25)));

// Question 3
function s_generator(pt) {
    // your answer here
    return t => t < 1/2 ? make_point(math_cos((3) * math_PI * t) + 
                        x_of(pt) , math_sin((3) * math_PI* t) + y_of(pt) + 1) :
                        make_point(math_sin((3) * math_PI * (t - 1/2)) + 
                        x_of(pt) , math_cos((3) * math_PI* (t-1/2)) + y_of(pt) -1);
}
// Test
draw_connected_2d(200)(s_generator(make_point(0.5, 0.25)));