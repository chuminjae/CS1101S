// Question 1
function pascal_triangle(row, position){
    if(row === 0 || position === 0 || position === row){
        return 1;
    }
    else{
        return pascal_triangle(row -1, position - 1) + pascal_triangle(row-1, position); 
    }
}
pascal_triangle(4,3);
// Question 2

// Question 3
const ans1 = 1;
const ans2 = 1;