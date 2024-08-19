import{rcross, sail, stackn, stack,corner, nova,green, heart, show, repeat_pattern, quarter_turn_right, turn_upside_down} from "rune";
show(heart);
show(green(heart));
show(turn_upside_down(heart));
function quarter_turn_left(rune){
    return quarter_turn_right(quarter_turn_right(quarter_turn_right(rune)));
}
stack(rcross, sail); // rcross goes top.
function beside(rune1, rune2){
    return quarter_turn_left(stack(quarter_turn_right(rune1), quarter_turn_right(rune2)));
}
show(beside(sail, corner));
// stackn (number, rune1) --> rune1을 number만큼 쌓는다.
show(stackn(5, heart));
// Quilting
function quilt(n1, n2, rune1){
    return stackn(n1, quarter_turn_left((stackn(n2, quarter_turn_right(rune1)))));
}
function make_cross(rune){
    return stack(beside(quarter_turn_right(rune), quarter_turn_right(quarter_turn_right(rune))), beside(rune, quarter_turn_left(rune)));

}
repeat_pattern(5, make_cross, rcross);
