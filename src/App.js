import { useLayoutEffect} from 'react';
import { gsap } from 'gsap';
import './App.css';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';

function App() {
  

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    //var timeScaleClamp = gsap.utils.clamp(4, 6);

   
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
        scrub:true,
        start:'top top',
        end:()=> window.innerHeight,
        anticipatePin: 1,
      }
    })

    gsap.set('.skill-reel',{
      x:"20%"
    })

    var reel = gsap.timeline().to('.skill-reel',{
      x:"-100%",
      duration:70,
      ease:'none',
      repeat:-1,
    })

    var timeScaleClamp = gsap.utils.clamp(1, 6);

    ScrollTrigger.create({
      start:0,
      onUpdate:(self) => {
        reel.timeScale(timeScaleClamp(Math.abs(self.getVelocity() / 200)))
      }
    })

   let skillAnimation = gsap.timeline({
    scrollTrigger:{
      trigger:'.skillBlock',
      end:window.innerHeight*2.8,
      start:window.innerHeight*2.1,
      scrub:true,
    }})

    skillAnimation
    .to('.skill-layer:nth-child(1) .skillBlock',{
      x:'-70vw',
      y:'-45vh',
      ease:'easeOut'
    })
    .to('.skill-layer:nth-child(2) .skillBlock',{
      x:'-50vw',
      y:'-45vh',
       ease:'none'
    })
    .to('.skill-layer:nth-child(3) .skillBlock',{
      x:'-30vw',
      y:'-45vh',
      ease:'none'
    })
    .to('.skill-layer:nth-child(4) .skillBlock',{
      x:'-70vw',
      ease:'none'
    })
    .to('.skill-layer:nth-child(5) .skillBlock',{
      x:'-50vw',
      ease:'none'
    })
    .to('.skill-layer:nth-child(6) .skillBlock',{
      x:'-30vw',
      ease:'none'
    })
    .to('.skill-layer:nth-child(7) .skillBlock',{
      x:'-70vw',
      y:'45vh',
      ease:'none'
    })
    .to('.skill-layer:nth-child(8) .skillBlock',{
      x:'-50vw',
      y:'45vh',
      ease:'none'
    })
    .to('.skill-layer:nth-child(9) .skillBlock',{
      x:'-30vw',
      y:'45vh',
      ease:'none'
    })

    gsap.to(".text p",{
      backgroundPositionX:'0%',
      stagger:1,
      scrollTrigger:{
        trigger:".text p",
        scrub:1,
        markers:true,
        start:"top 65%",
        end:"bottom 20%"
      }
    })
      
  });
  return (
    <div className='contents'>
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
  </div>
  <div className='reel-container'>
    <div className='skill-reel'>
      <div className='reel-item'> - My Skills </div>
      <div className='reel-item'> - My Skills </div>
      <div className='reel-item'> - My Skills </div>
      <div className='reel-item'> - My Skills </div>
      <div className='reel-item'> - My Skills </div>
      <div className='reel-item'> - My Skills </div>
      <div className='reel-item'> - My Skills </div>
      <div className='reel-item'> - My Skills </div>
      <div className='reel-item'> - My Skills </div>
    </div>
  </div>
  <div className='skill-container'>
    <div className="skill-layer">
        <div className="skillBlock"></div>
    </div>
    <div className="skill-layer">
        <div className="skillBlock"></div>
    </div>
    <div className="skill-layer">
        <div className="skillBlock"></div>
    </div>
    <div className="skill-layer">
        <div className="skillBlock"></div>
    </div>
    <div className="skill-layer">
        <div className="skillBlock"></div>
    </div>
    <div className="skill-layer">
        <div className="skillBlock"></div>
    </div>
    <div className="skill-layer">
        <div className="skillBlock"></div>
    </div>
    <div className="skill-layer">
        <div className="skillBlock"></div>
    </div>
    <div className="skill-layer">
        <div className="skillBlock"></div>
    </div>
  </div>
  <div className='project-greeting'>
    <div className='text'>
      <p>A creative</p>
      <p>project is a</p>
      <p>moving target!</p>
    </div>
  </div>
  </div>
  );
}


export default App;