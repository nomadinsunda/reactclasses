import React from 'react';
import {useRef } from 'react';
import MyInput from './MyInput.jsx'


function Main() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();    
  }

  function handleScroll() {
    ref.current.scrollIntoView();    
  }

  return (
    <form>
      <MyInput ref={ref} placeholder="Enter your name"/>
      <button type="button" onClick={handleClick}> Edit </button>
      <button type="button" onClick={handleScroll}> Scroll </button>
    </form>
  );
}

export default Main;
