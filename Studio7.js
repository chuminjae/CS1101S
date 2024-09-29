function n_of_n_stream(){
    function helper(a, cnt){
        return pair(a, () => cnt > 1 
                           ? helper(a, cnt - 1)
                           : helper(a + 1, a + 1));
    }
    return helper(1, 1);
}
eval_stream(n_of_n_stream(), 22);

pair(1, helper(2, 2))

pair(1, pair(2, helper(2, 1)))

pair(1, pair(2, pair(2, helper(3,3))).....