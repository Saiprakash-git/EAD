import { useState } from 'react'
import './App.css'

const App= () =>{  

  const [count, setCount ] =useState(0); 

  
        const Increment = () => { 
          setCount(count+1); 
        }

        const decrement = () => { 
          setCount(count-1); 
        } 
        const reset =() => { 
          setCount(0); 
        }
  return (  
    <>  
    <header> 
      <h2>Counter App </h2>
    </header>
    <div> 
      
      <button onClick={decrement}> Decrement </button> 
      <span> {count} </span> 
      <button onClick={Increment}>  Increment </button> 
      <p> <button onClick={reset}> Reset </button></p> 

      
      </div>
      
      </>
  )
}
export default App; 