const s = [5, 2, 9]; // make it [9, 1, 4]

function edit(){
    let ss = s; // mutating an array
    ss[0] = 9;
    ss[1] = 1;
    ss[2] = 4;

    return ss;
}
console.log(edit());