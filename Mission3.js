// Question 1
// helper functions can go here
function steps(r1, r2, r3, r4) {
    // your implementation goes here
    return beside(stack(scale_vertical(r4,1/4),scale_vertical(r3,1/2)), 
                  stack(r1,scale_vertical(r2,3/4)));
}

// Test
render(steps(unit_cube, unit_sphere,
             unit_pyramid, unit_cylinder)); 

// Question 2
// helper functions can go here
function cone(n, shape) {
    // your implementation goes here
    return n === 1 
           ? shape 
           : overlay_frac((n-1)/n, cone(n-1, scale_horizontal(shape,(n-1)/n)), shape);
} 
// Tests
render(cone(4, unit_cylinder));  


