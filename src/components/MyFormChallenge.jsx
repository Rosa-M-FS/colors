import { useState } from "react";
import BoxColor from "./BoxColor";
const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
function MyForm() {
  const [value,setValue]=useState('');

  return (
    <>
      <input type="text" placeholder="Escribe un color" value={value} onChange={(e)=>setValue(e.target.value)}/>
      <div className="container">
        {colors.map((color,i)=>(
          <BoxColor key = {i} color={color} value={value}/>
        ))}
      </div>
    
    
    </>
  );
}

export default MyForm;