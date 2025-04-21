import React, {useState} from "react";
function MyComponent3(){
  const [foods , setFoods] = usestate(["Apple" , "Oranges", "banana"]);

  function handleAddfood(){
    const newFood = document.getElementById("foodInput").ariaValueMax;
    document.getElementById("foodInput").value ="";

    setFoods(foods =>[...food,newFood]);
    

  }
  function handleremoveFood(){

  }

  return(
<div>
  <h2>List of Food</h2>
  <ul>
    {foods.map((food, index) => <li key={index}> {food}</li>)}
  </ul>
  <input type="text" id="foodInput" placeholder="Enter food name" />
  <button onClick={handleAddfood}>Add Food</button>
</div>
  );
}
export default MyComponent3