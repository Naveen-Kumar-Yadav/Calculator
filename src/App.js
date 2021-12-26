import './App.css';
import React, { useState }  from 'react'

const App = () => {
    
      const [result, setresult] = useState("0");
      const handleClick = (e) => {
        setresult(result.concat (e.target.name))

      }
      const clear = () => {
        setresult("")
      }
      const calculate = () =>{
        setresult(eval(result).toString());
      }

      return(
        <>
       <div className="container">
         <form>
           <input type="text" value={result}/>
         </form>
         <div className="keypad">
           <button className="Number" onClick={clear} id= "clear">Clear</button>
           <button  className="operator" onClick={calculate} id = "result ">=</button>
           <button  className="operator" name="+" onClick={handleClick}>+</button>
           <button className="Number" name="7" onClick={handleClick}>7</button>
           <button  className="Number" name="8" onClick={handleClick}>8</button>
           <button  className="Number"name="9" onClick={handleClick}>9</button>
           <button   className="operator" name="-" onClick={handleClick}>-</button>
           <button  className="Number" name="4" onClick={handleClick}>4</button>
           <button  className="Number" name="5" onClick={handleClick}>5</button>
           <button  className="Number" name="6" onClick={handleClick}>6</button>
           <button className="operator"  name="*"  onClick={handleClick}>&times;</button>
           <button  className="Number"name="1"  onClick={handleClick}>1</button>
           <button   className="Number"name="2" onClick={handleClick}>2</button>
           <button   className="Number"name="3" onClick={handleClick}>3</button>
           <button  className="operator" name="/ " onClick={handleClick}>&divide;</button>


         </div>
       </div>
        </>
    );
}
export default App;



