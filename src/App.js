import React, { useState } from "react";

function App() {
  return <>
    <TipCalculator />
  </>
  
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [frndTip, setFrndTip] = useState(0);

  const tip = (((myTip+frndTip)/2)/100)*bill;

  function handleReset() {
    setBill(0);
    setMyTip(0);
    setFrndTip(0);
  }

  return (
    <div>
      <InitialBill bill={bill} setBill={setBill}/>
      <Service tip={myTip} onSetTip={setMyTip}>How did you like the service?</Service>
      <Service tip={frndTip} onSetTip={setFrndTip}>How did your friend like the service?</Service>
      {
        bill ? <>
          <FinalBill bill={bill} tip={tip} />
          <Reset onReset={handleReset}/>
        </> : <></>
      }
    </div>
  );
}

function InitialBill({ bill, setBill }) {
  return (
    <div>
      <h3>How much was the bill?</h3>
      <input type="text" placeholder="Bill value." value={bill} onChange={(e) => (setBill(Number(e.target.value)))}/>
    </div>
  );
}

function Service({ tip, onSetTip, children }) {
  return (
    <div>
      <h3>{children}</h3>
      <select name="service" value={tip} onChange={(e) => onSetTip(Number(e.target.value))}>
        <option value={0}>Dissatisfied: {0}%</option>
        <option value={10}>It was Good:{10}%</option>
        <option value={15}>It was Great:{15}%</option>
        <option value={20}>Absolutely Amazing: {20}%</option>
      </select>
    </div>
  );
} 

function FinalBill({ bill, tip }) {
  
  return (
    <div>
      <h1>You pay ${bill + tip} (${bill} + ${tip} tip)</h1>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset} >Reset</button>
    </div>
  );
}

export default App;
