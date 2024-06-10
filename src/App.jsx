import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [uppercase,setuppercase]=useState(true)
  const [lowercase,setlowercase]=useState(true)
  const [number,setnumber]=useState(true)
  const [Symbol,setsymbol]=useState(true)
  const [password,setpassword]=useState("")

   
  const genpass=()=>{

     let pass=''

     if(uppercase) pass +="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     if(lowercase) pass +=" abcdefghijklmnopqrstuvwxyz";
     if(number) pass +="0123456789";
     if(Symbol) pass +="!@#$%^&*()_+<>?";
     
     console.log(pass);

    let genpass="";

    for(let i=0; i<length; i++){

      const rodomindex=Math.floor(Math.random() *  pass.length);
       
     
      console.log(rodomindex);

      genpass += pass[rodomindex];

     
    }
    
    setpassword(genpass)


  }

  const copyclick =()=>{
    
    alert("Password Copy")
    navigator.clipboard.writeText(password)
  }


  useEffect(()=>{
    genpass()

  },[])



  return (
    <>
      
       <div className=' bg-primary vh-100 d-flex justify-content-center align-items-center sha'>
      
           <div className=' border bg-white p-3 rounded rounded-4' style={{width:"350px"}}>
               
                <div className=' d-flex align-items-center gap-1'><h3 className='fw-bold text-primary' >Password Generator</h3> <img src="https://cdn-icons-png.flaticon.com/512/421/421648.png" width={"40px"} alt="" /> </div>

                <div>
                  <label htmlFor="" className=' form-label'>Password Legnth</label>
                  <input type="number" min={0}  onChange={(e)=>{setlength(parseInt(e.target.value))}}    className=' form-control'  value={length}/>
                </div>

               <div className=' d-flex align-items-center  align-content-center gap-2 mt-2'>

                 <input  type="checkbox" onChange={(e)=>{setuppercase(e.target.checked)}}     checked={uppercase}  className='form-check'/>
                 <label htmlFor="" className='form-label mt-1'>Include Uppercase</label>

               </div>

               <div className=' d-flex align-items-center  align-content-center gap-2 mt-2'>

                 <input type="checkbox"   onChange={(e)=>{setlowercase(e.target.checked)}}          checked={lowercase}    className='form-check'/>
                 <label htmlFor="" className='form-label mt-1'>Include Lower Case</label>

               </div>

               <div className=' d-flex align-items-center  align-content-center gap-2 mt-2'>

                 <input type="checkbox"  onChange={(e)=>{setnumber(e.target.checked)}}        checked={number}  className='form-check'/>
                 <label htmlFor="" className='form-label mt-1'>Include Number</label>

               </div>

               <div className=' d-flex align-items-center  align-content-center gap-2 mt-2'>

                 <input type="checkbox"  onChange={(e)=>{setsymbol(e.target.checked)}}       checked={Symbol}  className='form-check'/>
                 <label htmlFor="" className='form-label mt-1'>Include Symbol</label>

               </div>

               <div className=' d-flex  gap-2 mt-2'>

                <button className=' btn btn-primary' onClick={genpass}  >Generator Password</button>

               </div>
             
             <div className=' d-flex gap-2 mt-3 mb-2'>
              
              <input type="text" readOnly  value={password}   className=' form-control' /> <button className='btn bg-success text-white fw-bold'  onClick={copyclick}> Copy</button>

             </div>
                
             <div>
              <p style={{fontSize:"8px"}} className=' fw-bold text-center' >Dedigned by <a href="">@Sekar K</a></p>
             </div>

           </div>

        
      </div>

 
    </>
  )
}

export default App
