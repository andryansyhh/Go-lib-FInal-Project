import React from 'react';
import Spinner from "../../spinner/Spinner"

const Loader = ({isLoading}) => {
  if(!isLoading) return null;
  return (
    <Spinner/>
  )
}

export default Loader
