function pair(x, y){
    component => component === 0 ? x : y;
}
function head(p){
    return p(0);
}
function tail(p){
    return p(1);
}
