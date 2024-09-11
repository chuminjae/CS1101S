function count_data_items(tree) {
 return is_null(tree)
         ? 0
         : ( is_list(head(tree))
         ? count_data_items(head(tree))
         : 1 )
         +
         count_data_items(tail(tree));
}
function scale_tree(tree, k) {
     return map(sub_tree =>
             !is_list(sub_tree)
             ? k * sub_tree
             : scale_tree(sub_tree, k),
             tree);
}
function map_tree(f, tree) {
     return map(sub_tree =>
             !is_list(sub_tree)
             ? f(sub_tree)
             : map_tree(f, sub_tree),
             tree);
}

function append_iter(xs, ys) {
     return is_null(xs)
     ? ys
     : append_iter(tail(xs), pair(head(xs), ys));
}
function append(xs, ys) {
    return append_iter(reverse(xs), ys);
}
function append(xs, ys) { // Recursive process
     return is_null(xs)
     ? ys
     : pair(head(xs), append(tail(xs), ys));
}
function app(current_xs, ys, c) { // Iterative process
     return is_null(current_xs)
     ? c(ys)
     : app(tail(current_xs), ys,
     x => c(pair(head(current_xs), x)));
}
function append_iter(xs, ys) {
     return app(xs, ys, x => x);
}
function app(current_xs, ys, c) { // Iterative process
     return is_null(current_xs)
     ? c(ys)
     : app(tail(current_xs), ys,
     x => c(pair(head(current_xs), x)));
}
function append_iter(xs, ys) {
     return app(xs, ys, x => x);
}
function factorial(n) { // Recursive process
    return n === 1
    ? 1
    : n * factorial(n - 1);
}
function fac(n, c) { // Iterative process
    return n === 1
    ? c(1)
    : fac(n - 1, x => c(n * x));
}
function factorial_iter(n){
    return fac(n, x => x);
}





