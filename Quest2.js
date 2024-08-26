import { repeat_pattern } from 'rune';
function sierpinski(shape) {
    // your program goes here
    const a = union(translate(shape,1,0,0),translate(shape, 0,0,0));
    const b = union(translate(shape, 0,1,0), translate(shape, 1,1,0));
    const c = union(a, b);
    return scale(union(c, translate(shape,0.5,0.5,1)),0.5,0.5,0.5);
}

function hypofractional(n, shape) {
    // your program goes here
    return repeat_pattern(n, sierpinski,shape);
}

// Testing
render(sierpinski(unit_pyramid));
render(sierpinski(unit_cylinder));
render(hypofractional(3, unit_cube));
render(hypofractional(5, unit_pyramid));