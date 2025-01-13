// Understanding UseState () 


function usestate(){
     

    const count = 1;

    function setCount(count) {
        return count+1;
    }


    return [count , setCount]
}


const [count , setCount]= usestate()

console.log(setCount);



