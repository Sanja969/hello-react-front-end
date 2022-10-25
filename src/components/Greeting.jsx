import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessage } from '../redux/messages';

const Greeting = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMessage());
  }, [])

  const greeting = useSelector((state) => state.message);

  return (
    <h3>{greeting.text}</h3>
  )
}

export default Greeting;