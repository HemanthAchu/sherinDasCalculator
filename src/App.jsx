
import { useState } from 'react'

import './App.css'








function App() {

  const [input,setInput]=useState('')
  const [result,setResult]=useState('')
  const clicked=(value)=>{
    if (value === '=') {
      try {
        setResult(eval(input));
       setInput('')
      } catch (error) {
        setResult('Error');
      }
    } 
    else if (value === 'Ac') {
      setInput('');
      setResult('');
    }
    else if(value=='clear'){
      setInput((value)=>value.slice(0,-1))
    }
     else {
      setInput((Inputs) => Inputs + value);
    }
  }


  return (
    <>
    <div className='calculator'>
    <div className='main'>
    <div className="main1">
    <div className='output'>
        <div className='previous'>{input}</div>
        <div className='current'>{result}</div>
  </div>  
<button onClick={()=>clicked('Ac')} className='span-two'>Ac</button>
<button onClick={()=>clicked('clear')} >Del</button>
<button onClick={()=>clicked('/')}>/</button>
<button onClick={()=>clicked('7')}>7</button>
<button onClick={()=>clicked('8')}>8</button>
<button onClick={()=>clicked('9')}>9</button>
<button onClick={()=>clicked('*')}>*</button>
<button onClick={()=>clicked('4')}>4</button>
<button onClick={()=>clicked('5')}>5</button>
<button onClick={()=>clicked('6')}>6</button>
<button onClick={()=>clicked('+')}>+</button>
<button onClick={()=>clicked('1')}>1</button>
<button onClick={()=>clicked('2')}>2</button>
<button onClick={()=>clicked('3')}>3</button>
<button onClick={()=>clicked('-')}>-</button>
<button onClick={()=>clicked('0')}>0</button>
<button onClick={()=>clicked('.')}>.</button>
<button onClick={()=>clicked('=')} className='span-two'>=</button>
</div>
</div>

    </div>
    </>
  )
}

export default App