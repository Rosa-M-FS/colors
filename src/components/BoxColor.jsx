import {useRef,useEffect} from 'react';

function BoxColor ({color, value}) {
  const boxRef=useRef(null);
  const match = value.toLowerCase()===color;

  useEffect(()=>{
    if (boxRef.current){
      boxRef.current.style.backgroundColor=match ? color:'transparent';
    }
  },[value,color,match]);
  return (
    <>
    <div ref={boxRef} className={`box ${color}`} style={{ color: match && color === 'white' ? 'black' : 'white' }}>
        <p>{match ? `¡Soy ${color}!`:`No soy ${value}`}</p>
    </div>
    </> 
  )
}
export default BoxColor;  
