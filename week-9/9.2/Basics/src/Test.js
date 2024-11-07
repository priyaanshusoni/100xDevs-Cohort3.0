const arr = [1,2,3,4];

function setArr(x){
    return [...arr ,x ];
}

const newarr = setArr(6);

console.log(newarr);