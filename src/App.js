import { createContext, useState } from 'react';
import A from './Components/A';

export const UserContext = createContext();

function App() {

  const [state, setState] = useState("");
  const [call, setCall] = useState("");

  const [childParent, setChildParent] = useState("");
  const [childParentCall, setChildParentCall] = useState("");

  function fun() {
    setCall(state)
  }

  return (
    <>
      <UserContext.Provider value={{call, childParent, setChildParent, childParentCall, setChildParentCall}}>
        <center>
        <div className="firstPart">
          <h1>Parent To Child</h1>
          <input type="text" placeholder='Enter Your Word' value={state} onChange={(e) => setState(e.target.value)} style={{width: "300px", height: "30px", paddingLeft: "20px"}} />
          <button onClick={fun} style={{marginLeft:"20px"}}>Click</button>
        </div>
        <A />
        </center>
      </UserContext.Provider>
    </>
  );
}

export default App;
