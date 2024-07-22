import { useState } from "react"

export default function App(){
  //const [tipped,setTipped]=useState("")
  return(
    <div>
      <Tipcalculator/>
    </div>
    

  )
}

function Tipcalculator(){
  const [bill,setBill]=useState("")
  const [percent1,setPercent1]=useState("")
  const [percent2,setPercent2]=useState("")

  const tip=bill*((percent1+percent2)/2)/100;

  function handlereset(){
    return(
      setBill(""),
      setPercent1(0),
      setPercent2(0)
    )
  }
  return(
    <div>  
    <Billinput bill={bill} onsetBill={setBill}/>
  <Selectpercent perk={percent1} onperk={setPercent1}>How did you like service</Selectpercent>
  <Selectpercent perk={percent2} onperk={setPercent2}>How Did your friend like the service</Selectpercent>
  {bill>0 && <><Outputcompo tip={tip} bill={bill}/>
  <Reset handlereset={handlereset}/></>}
  </div>

  )
}


function Billinput({bill,onsetBill}){
  return(
    <div>
      <span>How much was the actual bill that was ate by me?</span>
    <input type="text" placeholder="bill...." value={bill} onChange={(e)=>onsetBill(Number(e.target.value))}></input>
    </div>
  )

}

function Selectpercent({children,perk,onperk}){
  return(
    <div>
      <label>{children}</label>
      <select value={perk} onChange={(e)=>onperk(Number(e.target.value))}>
    <option value="0">Disatisfied</option>
    <option value="5">It was Okay</option>
    <option value="10">It was Good</option>
    <option value="15">Very Good</option>
    <option value="20">Absolutly Amazing</option>
  </select>
    </div>
  )
  
}

function Outputcompo({bill,tip}){
  return(
    <div>
      <h3>You Pay X(${bill}+${tip} Tip)</h3>
    </div>
  )

}
function Reset({handlereset}){
  return(
    <button onClick={handlereset}>Reset</button>
  )
}