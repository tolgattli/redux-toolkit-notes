import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useEffect } from "react";
import { getCountry } from "./redux/features/country/countrySlice";

function App() {
  const dispatch = useDispatch();
  
  const { counter } = useSelector((state) => state.counter);
  const { country } = useSelector((state) => state.country);


  
  useEffect(()=>{
    dispatch(getCountry())
    
  },[])
  
  console.log(country);
  return (
    <div>
      <span onClick={() => dispatch(decrement())}>-</span>
      <span>{counter}</span>
      <span onClick={() => dispatch(increment())}>+</span>
    </div>
  );
}

export default App;

// tanımladığımız sliceları kullanabilmek için dispatch etmemiz gerekmektedir!!!
{
  /*  counter kullanabilmek için store içindeki reducer alanını doldurmamız gerekmektedir. */
}
