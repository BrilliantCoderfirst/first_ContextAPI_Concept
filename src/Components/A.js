import React, { useContext } from 'react';
import { UserContext } from '../App';
import B from './B';

const A = () => {

  const {childParentCall} = useContext(UserContext);

  return (
    <>
        <h1>A <span style={{color:"red"}}>{childParentCall}</span></h1>
        <B />
    </>
  )
}

export default A