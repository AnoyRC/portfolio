import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './App.css';

function App() {
  const boxRef = useRef();

  useLayoutEffect(() => {
  // Refs allow you to access DOM nodes
    console.log(boxRef) // { current: div.box }
  // then we can animate them like so...
    gsap.to(boxRef.current, {
      rotation: "+=360"
    });
  });
  return (
    <div className="App">
      <div className="box" ref={boxRef}>Hello</div>
    </div>
  );
}

export default App;
