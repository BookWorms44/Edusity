import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Programs from './component/Programs/Programs'
import Title from './component/Title/Title'
import About from './component/About/About'
import Campus from './component/Campus/Campus'
import Testimonials from './component/Testimonials/Testimonials'
import Content from './component/Conent/Content'
import Footer from './component/Footer/Footer'
import Videoplayer from './component/VideoPlayer/Videoplayer'
import { useState } from 'react'


const App = () => {
 const [PlayState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Content />
        <Footer />
        </div>
        <Videoplayer PlayState={PlayState} setPlayState= {setPlayState}/>
    </div>
  );
}

export default App