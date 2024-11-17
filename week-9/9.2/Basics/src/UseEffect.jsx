import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count , setCount] = useState(0);

    function increaseCount(){
        console.log(" Increase Count Called" + count);
         setCount(c => c+1)
    }

    useEffect(()=>{
        console.log("above setInterval : "); // this weill be printed only once because this useEffect logic run on the firtst time when the component mounts
          setInterval(increaseCount,1000)
    },[])

    useEffect(()=>{
        console.log(`The count has been updated to ${count}`);
    }, [count])

   
    // setInterval(increaseCount , 1000);
  return (
    <div>
      {count}
    </div>
  )
}

export default UseEffect
