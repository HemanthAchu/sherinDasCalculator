
import { data } from './data'
import './App.css'
import { useState } from 'react'
import { useRef } from 'react'

function App() {
const [index,setindex]=useState(0)
const [question,setquestion]=useState(data[index])
const [lock, setlock]=useState(false)
const [score ,setscore] =useState(0)
const[result,setresult] =useState(false)

let option1=useRef(null)
let option2=useRef(null)
let option3=useRef(null)
let option4=useRef(null)
const good =document.getElementById('good')
let option_array =[option1,option2,option3,option4]

const checkAns =(e,ans)=>{
if(lock===false){
  if(question.ans===ans){
    e.target.classList.add("win")
    setlock(true)
    setscore(score+1)
  }else{
    e.target.classList.add("fail")
    setlock(true)
    option_array[question.ans-1].current.classList.add("win");
  }
}
}




      const Nextbtn=(e)=>{
      if (lock===true) {
        if(index+1===data.length){
          setresult(true)
          return 0;
          }
        setindex(index+1)
      setquestion(data[index+1])
      setlock(false)
     
      option_array.map((option)=>{
        option.current.classList.remove("win")
        option.current.classList.remove("fail")
        return null
      })
      }


  }
  const reset =()=>{
    setindex(0)
    setlock(false)
    setresult(false)
    setscore(0)
    setquestion(data[index])
  }
  
  return (
        <>
       
      <div className="main">
        <div className="class">
         <div className='class1'> <h3 id='good'>Score : {score}</h3> <h2>{index+1}/{data.length}Qus</h2>     </div>
          {
            result?<></>:<><h3 className='question'>{index+1}.{question.question}</h3>
            <ul>
              <li onClick={(e)=>checkAns(e,1)} ref={option1}>{question.option1}</li>
              <li onClick={(e)=>checkAns(e,2)}  ref={option2}>{question.option2}</li>
              <li onClick={(e)=>checkAns(e,3)} ref={option3}>{question.option3}</li>
              <li  onClick={(e)=>checkAns(e,4)} ref={option4}>{question.option4}</li>
            </ul>
   <center><button onClick={(e)=>Nextbtn(e)} className=' btn  w-75'>Next</button></center>
  </>
          }

{
  result?<><center><button onClick={reset} className='btn'>Reset</button></center></>:<></>
}




        </div>
      </div>
        </>
          
  )
}

export default App