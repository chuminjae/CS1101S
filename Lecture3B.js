import {make_point, translate, rotate_around_origin, arc,draw_connected, draw_connected_full_view_proportional, x_of, y_of} from "curve";
function unit_circle(t){
    return make_point(math_cos(2 * math_PI * t), math_sin(2 * math_PI* t));
}
function unit_line_at(y){
    return t=> make_point(t, y);
}
const unit_line = unit_line_at(0);
// draw connected is HOF getting a function as a parameter. The t value varies from 0 to 1. 
// The number beside draw_connected is used to illustrate the number of lines to connect the dots
// of the curve.
draw_connected(200)(unit_circle);
// From 0 to 1, unit circle is express, and using 200 lines it is drawn. 
// In the coordinate system of (0,0) to (1,1)
draw_connected_full_view_proportional(200)(unit_circle);
function spiral_one(t){
    const p = unit_circle(t);
    return make_point(t * x_of(p), t * y_of(p));
}
// Gets the coordinate from the unit circle and multiply with t. Shrink to same size.
draw_connected(200)(spiral_one);
draw_connected_full_view_proportional(200)(spiral_one);
function spiral(r){
    return t =>{
          const p = unit_circle((t * r) % 1); // Increase speed
          return make_point(t * x_of(p), t * y_of(p));
    };
}
draw_connected_full_view_proportional(200)(spiral(3));
const rot_line = rotate_around_origin(0,0,math_PI / 6)(unit_line);
function compose(f,g){
    return x => f(g(x));
}
const shift_rot = compose(translate(0,0.25,0), rotate_around_origin(0,0,math_PI/6));
const shifted_rot_line = shift_rot(unit_line);
draw_connected(200)(shifted_rot_line);
function connect_rigidly(curve1, curve2){
    return t => t < 1/2
           ? curve1(2 * t)
           : curve2(2 * t - 1);
}
const result_curve = connect_rigidly(arc, translate(1,0,0)(arc));
draw_connected_full_view_proportional(200)(result_curve);
