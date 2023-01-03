import { useLayoutEffect} from 'react';
import { gsap } from 'gsap';
import './App.css';
import ScrollTrigger from 'gsap/ScrollTrigger';

function App() {
  

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
   
    gsap.set('.gallery-layer',{
      y:'10vh',
      scale:3.333
    })

    gsap.to('.gallery-layer',{
      scale:1,
      y:'100vh',
      ease:'none',
      scrollTrigger:{
        trigger: ".gallery",
        markers:true,
        scrub:true,
        pin:'gallery',
        start:'top top',
        end:()=> window.innerHeight,
        anticipatePin: 1,
      }
    })
    
      
      
  });
  return (
    <div className="gallery-container">
    <div className="gallery">
      <div className="gallery-layer">
        <div className="galleryBlock"></div>
      </div>
      <div className="gallery-layer">
        <div className="galleryBlock"></div>
      </div>
      <div className="gallery-layer">
        <div className="galleryBlock"></div>
      </div>
      <div className="gallery-layer center-layer">
        <div className="galleryBlock centerBlock"></div>
      </div>
      <div className="gallery-layer">
        <div className="galleryBlock"></div>
      </div>
      <div className="gallery-layer">
        <div className="galleryBlock"></div>
      </div>
      <div className="gallery-layer">
        <div className="galleryBlock"></div>
      </div>
      <div className="gallery-layer">
        <div className="galleryBlock"></div>
      </div>
      <div className="gallery-layer">
        <div className="galleryBlock"></div>
      </div>
    </div>
    <div className='end'></div>
  </div>
  );
}

export default App;
