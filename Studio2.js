// Q1
function biggie_size(combo){
    return combo + 4;
}
// Q2
function unbiggie_size(big_size){
    return big_size - 4;
}
// Q3
function is_biggie_size(food){
	return food > 4;
}
// Q4
function combo_price(combo){
  return is_biggie_size(combo) ? 1.17 * (unbiggie_size(combo)) + 0.5 : 1.17 * combo;
}
// Q5
function empty_order(){
    return 0;
}
// Q6
function add_to_order(order, combo){
	return order * 10 + combo;
}
// Q7
function last_combo(order){
	return order % 10;
}
// Q8
function last_combo(order){
	return (order - order % 10) / 10;
	// return math_floor(order / 10);
}
