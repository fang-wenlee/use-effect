import React, {useEffect, useState } from "react";

const Counter = () =>{
const [count, setCount ]= useState(0)
const [count2, setCount2 ]= useState(0)
/*
//this will run specific for the first component render --componentDidMount []
useEffect(()=>{
 console.log(`component did mount ${count}`)
  //this will run for compnent unmount
  return () =>{
      console.log(`we are in the cleanup -the cuont is unmount ${count}`) }
 }, [])
*/
//=====================================================
// useEffect(()=>{
//     //this is equalvilent to componentDidUpdate
//     console.log(`useEffect is based on count and component ${count}`)
//     }, [count, count2])
//=======================================================
//component will unmout
useEffect(()=>{
    //this is equalvilent to componentDidUpdate
    console.log(`useEffect is based on count and component ${count}`)
    return () =>{
        console.log(`we are in the cleanup -the cuont is unmount ${count}`) }

    }, [count])
return(
      <div>
      <h4>Counter </h4>
      <p>current count: count 1: {count}, count 2: {count2} </p>
      <button onClick={()=> setCount(count+1)}>+</button>
      <button onClick={()=> setCount2(count2+1)}>+</button>
</div>

  )
}
export default Counter;