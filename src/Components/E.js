import React, { useContext, useState } from 'react';
import {UserContext} from '../App';


const E = () => {

    const {call, childParent, setChildParent, setChildParentCall} = useContext(UserContext);

    function fun() {
      setChildParentCall(childParent);
    }

  return (
    <>
        <h1>E <span style={{color:"green"}}>{call}</span></h1>

        <div className="firstPart">
          <h1>Child To Parent</h1>
          <input type="text" placeholder='Enter Your Word' value={childParent} onChange={(e) => setChildParent(e.target.value)} style={{width: "300px", height: "30px", paddingLeft: "20px"}} />
          <button onClick={fun} style={{marginLeft:"20px"}}>Click</button>
        </div>
    </>
  )
}

export default E;