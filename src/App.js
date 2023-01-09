import { useLayoutEffect, useRef} from 'react';
import { gsap } from 'gsap';
import './App.css';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
import centerImage from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'
import image4 from './images/4.jpg'
import image5 from './images/5.jpg'
import image7 from './images/7.jpg'
import image8 from './images/8.jpg'
import image9 from './images/9.jpg'
import image10 from './images/10.jpeg'

function App() {
  let posX1 = useRef(null)
  let posY1 = useRef(null)
  let mouseX1 = useRef(null)
  let mouseY1 = useRef(null)

  useLayoutEffect(() => {
    let tl = gsap.timeline();
    let tl2 = gsap.timeline();
    
    let posX = posX1.current;
    let posY = posY1.current;
    let mouseX = mouseX1.current;
    let mouseY = mouseY1.current;
    tl.to({} , 0.016, {
      repeat: -1,
      onRepeat: function(){
        posX += (mouseX - posX) / 10;
        posY += (mouseY - posY) / 10;
        tl.set('.cursor', {
          css: {
            left: posX ,
            top: posY ,
          },
        });
      }
    })
    document.addEventListener("mousemove", function(e){
      mouseX = e.pageX;
      mouseY = e.pageY + bodyScrollBar.scrollTop;
    })
    tl2.from('.cursor', {
      duration: 1.5,
      delay: 2,
      opacity: 1
    }, "-=1")
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
      x:'16vw',
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
        start:window.innerHeight*3.4,
        end:window.innerHeight*4.2
      }
    })

    
    gsap.timeline({
    scrollTrigger: {
      trigger: '.project-container',
      scrub: true
    }
    })
    .to('.projectBlock', {
    stagger: .2,
    y: "-100vh",     
    });

    gsap.timeline({
      scrollTrigger:{
        trigger:'.quote-container',
        scrub:true,
        start:window.innerHeight*6.5,
        end:window.innerHeight*9.5
      }
    }).from('.quote-layer:nth-child(1) .quoteBlock',{
      y:"-50vh",
      x:"-100vw"
    }).to('.quote-layer:nth-child(1) .quoteBlock',{
      y:"50vh",
      x:"100vw"
    })

    gsap.timeline({
      scrollTrigger:{
        trigger:'.quote-container',
        scrub:true,
        start:window.innerHeight*6.5,
        end:window.innerHeight*9.5
      }
    }).from('.quote-layer:nth-child(2) .quoteBlock',{
      y:"50vh",
      x:"100vw"
    }).to('.quote-layer:nth-child(2) .quoteBlock',{
      y:"-50vh",
      x:"-100vw"
    })

    gsap.timeline({
      scrollTrigger:{
        trigger:'.quote-container',
        scrub:true,
        start:window.innerHeight*6.5,
        end:window.innerHeight*9.5
      }
    }).from('.quote-layer:nth-child(3) .quoteBlock',{
      y:"50vh",
      x:"-100vw"
    }).to('.quote-layer:nth-child(3) .quoteBlock',{
      y:"-50vh",
      x:"100vw"
    })

    gsap.timeline({
      scrollTrigger:{
        trigger:'.quote-container',
        scrub:true,
        start:window.innerHeight*6.5,
        end:window.innerHeight*9.5
      }
    }).from('.quote-layer:nth-child(4) .quoteBlock',{
      y:"-50vh",
      x:"100vw"
    }).to('.quote-layer:nth-child(4) .quoteBlock',{
      y:"50vh",
      x:"-100vw"
    })

    gsap.timeline({
      scrollTrigger:{
        trigger:'.about-container',
        toggleActions: "restart pause resume pause"
      }
    }).from('.text-layer',{
      y:'15vh',
      ease:'easeOut',
    }).to('.text-layer',{
      y:'0vh',
      duration:15,
      ease:'easeOut',
    })

    gsap.timeline({
      repeat:-1,
      scrollTrigger:{
        trigger:".about-container"
      }
    }).to('.paraBlock:nth-child(1)',{
      backgroundPositionX:'0%',
      duration:3,
      stagger:0.2
    }).to('.paraBlock:nth-child(1)',{
      backgroundPositionX:'100%',
      duration:3,
      stagger:0.2
    }).to('.paraBlock:nth-child(2)',{
      backgroundPositionX:'0%',
      duration:3,
      stagger:0.2
    }).to('.paraBlock:nth-child(2)',{
      backgroundPositionX:'100%',
      duration:3,
      stagger:0.2
    }).to('.paraBlock:nth-child(3)',{
      backgroundPositionX:'0%',
      duration:3,
      stagger:0.2
    }).to('.paraBlock:nth-child(3)',{
      backgroundPositionX:'100%',
      duration:3,
      stagger:0.2
    }).to('.paraBlock:nth-child(4)',{
      backgroundPositionX:'0%',
      duration:3,
      stagger:0.2
    }).to('.paraBlock:nth-child(4)',{
      backgroundPositionX:'100%',
      duration:3,
      stagger:0.2
    }).to('.paraBlock:nth-child(6)',{
      backgroundPositionX:'0%',
      duration:3,
      stagger:0.2
    }).to('.paraBlock:nth-child(6)',{
      backgroundPositionX:'100%',
      duration:3,
      stagger:0.2
    }).to('.paraBlock:nth-child(7)',{
      backgroundPositionX:'0%',
      duration:3,
      stagger:0.2
    }).to('.paraBlock:nth-child(7)',{
      backgroundPositionX:'100%',
      duration:3,
      stagger:0.2
    }).to('.paraBlock:nth-child(8)',{
      backgroundPositionX:'0%',
      duration:3,
      stagger:0.2
    }).to('.paraBlock:nth-child(8)',{
      backgroundPositionX:'100%',
      duration:3,
      stagger:0.2
    }).to('.paraBlock:nth-child(9)',{
      backgroundPositionX:'0%',
      duration:3,
      stagger:0.2
    }).to('.paraBlock:nth-child(9)',{
      backgroundPositionX:'100%',
      duration:3,
      stagger:0.2
    })
  })

  return (
    <div className='contents'>
   
    <div className="noise"></div>
    
    <div className="gallery-container">
    <div className="gallery">
      <div className="gallery-layer">
        <div className="galleryBlock">
        <img src={image2} alt='Welcome'/>
        </div>
      </div>
      <div className="gallery-layer">
        <div className="galleryBlock">
        <img src={image9} alt='Welcome'/>
        </div>
      </div>
      <div className="gallery-layer">
        <div className="galleryBlock">
        <img src={image4} alt='Welcome'/>
        </div>
      </div>
      <div className="gallery-layer center-layer">
        <div className="galleryBlock centerBlock">
          <img src={centerImage} alt='Welcome'/>
        </div>
      </div>
      <div className="gallery-layer">
        <div className="galleryBlock">
        <img src={image3} alt='Welcome'/>
        </div>
      </div>
      <div className="gallery-layer">
        <div className="galleryBlock">
        <img src={image5} alt='Welcome'/>
        </div>
      </div>
      <div className="gallery-layer">
        <div className="galleryBlock">
        <img src={image8} alt='Welcome'/>
        </div>
      </div>
      <div className="gallery-layer">
        <div className="galleryBlock">
        <img src={image7} alt='Welcome'/>
        </div>
      </div>
      <div className="gallery-layer">
        <div className="textBlock">
          <h1>Anoy Roy <br/>Chowdhury</h1>
        </div>
      </div>
      <div className='gallery-layer'>
        <div className="textBlock">
          <p>I am a programmer, artist and designer<br /> I learn whatever I find interesting and <br />
          My pursuit for perfection continues...</p>
        </div>
      </div>
    </div>
  </div>
  <div className='reel-container'>
    <div className='skill-reel'>
      <div className='reel-item'> ~ My Skills </div>
      <div className='reel-item'> ~ My Skills </div>
      <div className='reel-item'> ~ My Skills </div>
      <div className='reel-item'> ~ My Skills </div>
      <div className='reel-item'> ~ My Skills </div>
      <div className='reel-item'> ~ My Skills </div>
      <div className='reel-item'> ~ My Skills </div>
      <div className='reel-item'> ~ My Skills </div>
      <div className='reel-item'> ~ My Skills </div>
    </div>
  </div>
  <div className='skill-container'>
    <div className="skill-layer">
        <div className="skillBlock">
          <h1>Javascript</h1>
          <p>Every app I develop, has a little bit <br /> of javascript in it.</p>
          <p>_</p>
        </div>
    </div>
    <div className="skill-layer">
        <div className="skillBlock">
          <h1>HTML/CSS</h1>
          <p>I mainly use to develop basic<br /> website markup.</p>
          <p>_</p>
        </div>
    </div>
    <div className="skill-layer">
        <div className="skillBlock">
          <h1>React</h1>
          <p>My favourite and most used <br /> frontend library.</p>
          <p>_</p>
        </div>
    </div>
    <div className="skill-layer">
        <div className="skillBlock">
          <h1>MongoDB</h1>
          <p>I use this database for full stack<br /> website development.</p>
          <p>_</p>
        </div>
    </div>
    <div className="skill-layer">
        <div className="skillBlock">
          <h1>C++</h1>
          <p>My first and best competitive<br /> coding language.</p>
          <p>_</p>
        </div>
    </div>
    <div className="skill-layer">
        <div className="skillBlock">
          <h1>Solana Blockchain</h1>
          <p>I learnt to develop feasible and <br /> optimized smart contract.</p>
          <p>_</p>
        </div>
    </div>
    <div className="skill-layer">
        <div className="skillBlock">
          <h1>Express / Node</h1>
          <p>I use it as a part of MERN stack <br /> backend development.</p>
          <p>_</p>
        </div>
    </div>
    <div className="skill-layer">
        <div className="skillBlock">
          <h1>Rust</h1>
          <p>I learnt to develop smart contract <br /> for solana blockchain.</p>
          <p>_</p>
        </div>
    </div>
    <div className="skill-layer">
        <div className="skillBlock">
          <h1>Blender / Cinema4D</h1>
          <p>Yes, I know 3D modelling and most <br />used softwares are these two.</p>
          <p>_</p>
        </div>
    </div>
    <div className='skill-layer'>
      <img src={image10} alt='Skills' />
    </div>
  </div>
  <div className='project-greeting'>
    <div className='text'>
      <p>A creative</p>
      <p>project is a</p>
      <p>moving target!</p>
    </div>
  </div>
  <div className='project-container'>
    <div className='project-layer'>
      <div className='projectBlock'>
        <h2> 1 </h2>
        <h1>Live Data Feed Dapp</h1>
        <p>Live Data feed SOL/USD through Chainlink<br /> Language used : Javascript / Rust</p>
        <a href='https://github.com/AnoyRC/data-feed-dapp'>Link</a>
      </div>
      <div className='projectBlock'>
        <h2> 2 </h2>
        <h1>Blogger Dapp</h1>
        <p>Web3 blogger made on top of Solana Blockchain<br /> Language used : Javascript / Rust</p>
        <a href='https://github.com/AnoyRC/blogger-dapp'>Link</a>
      </div>
      <div className='projectBlock'>
        <h2> 3 </h2>
        <h1>Crowdfunding Dapp</h1>
        <p>Web3 Crowdfunding like kickstarter made on top of< br/> Solana Blockchain<br /> Language used : Javascript / Rust</p>
        <a href='https://github.com/AnoyRC/crowdfunding2.0-dapp'>Link</a>
      </div>
      <div className='projectBlock'>
        <h2> 4 </h2>
        <h1>GIPHY Dapp</h1>
        <p>Web3 Clone of Giphy made on top of< br/> Solana Blockchain<br /> Language used : Javascript / Rust</p>
        <a href='https://github.com/AnoyRC/giphy-project-dapp'>Link</a>
      </div>
      <div className='projectBlock'>
        <h2> 5 </h2>
        <h1>Reachable</h1>
        <p>A full stack social media website < br/>made using MERN stack<br /> Language used : Javascript</p>
        <a href='https://github.com/AnoyRC/Reachable'>Link</a>
      </div>
      <div className='projectBlock'>
        <h2> 6 </h2>
        <h1>NodeKB</h1>
        <p>A full stack CRUD app < br/>made using Pug.js<br /> Language used : Javascript / Pug</p>
        <a href='https://github.com/AnoyRC/nodekb'>Link</a>
      </div>
      <div className='projectBlock'>
        <h2> 7 </h2>
        <h1>Sign Language Detection</h1>
        <p>Python project to detect sign langauge <br /> using your web camera<br /> Language used : Python</p>
        <a href='https://github.com/AnoyRC/Sign-Detection-language'>Link</a>
      </div>
      <div className='projectBlock'>
        <h2> 8 </h2>
        <h1>Unity 3D games</h1>
        <p>Made 3d games using Unity<br /> Game Engine<br /> Language used : C#</p>
        <a href='https://isolation-media.itch.io/forgotten-lands'>Link</a>
      </div>
      <div className='projectBlock'>
        <h2> 9 </h2>
        <h1>2D vector art</h1>
        <p>Projects made with ipad, posted on<br /> Instagram<br /> software used : Procreate</p>
        <a href='https://www.instagram.com/anoyroychowdhury_/'>Link</a>
      </div>
    </div>
    <div className='line-layer'>
      <div className='lineBlock'></div>
    </div>
    <div className='line-layer'>
      <div className='lineBlock'></div>
    </div>
  </div>
  <div className='quote-container'>
    <div className='quote-layer'>
      <div className='quoteBlock'>
        <h1>Perfection is achieved</h1>
      </div>
    </div>
    <div className='quote-layer'>
      <div className='quoteBlock'>
        <h1>not when there is</h1>
      </div>
    </div>
    <div className='quote-layer'>
      <div className='quoteBlock'>
        <h1> nothing more to add,</h1>
      </div>
    </div>
    <div className='quote-layer'>
      <div className='quoteBlock'>
        <h1> but when there is </h1>
      </div>
    </div>
    <div className='quote-layer'>
      <div className='quoteBlock'>
        <h1>nothing left to take away.</h1>
      </div>
    </div>
  </div>
  <div className='about-container'>
    <div className='bg-layer'>
      <div className='bgBlock'></div>
    </div>
    <div className='text-layer'>
      <div className='paraBlock'>Send me a message</div>
      <div className='paraBlock'>and maybe we end up talking about</div>
      <div className='paraBlock'>emerging technology or web3,</div>
      <div className='paraBlock'>conspicuous environmentalism or brewing coffee</div>
      <div className='mailBlock'>anoyroyc3545@gmail.com</div>
      <div className='paraBlock'>Which netflix series you love the most</div>
      <div className='paraBlock'>game development ideas or spiritualism</div>
      <div className='paraBlock'>your recent business ideas</div>
      <div className='paraBlock'>or Lil Nas X's new song</div>
    </div>
  </div>
  </div>
  );
}


export default App;