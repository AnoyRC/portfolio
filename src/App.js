import { useLayoutEffect} from 'react';
import { gsap } from 'gsap';
import './App.css';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';

function App() {
  

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
   
    const bodyScrollBar = Scrollbar.init(document.body, {
      damping: 0.1,
      delegateTo: document,
      alwaysShowTracks: true,
      speed: 0.2,
    });
    ScrollTrigger.scrollerProxy("body", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });
    bodyScrollBar.addListener(ScrollTrigger.update);
    ScrollTrigger.defaults({
      scroller: document.body,
    });

    bodyScrollBar.track.xAxis.element.remove()
   
    gsap.set('.gallery-layer',{
      y:'10vh',
      scale:3.333
    })

    gsap.to('.gallery-layer',{
      scale:0.9,
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
    <div>
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
  </div>
  );
}

export default App;
