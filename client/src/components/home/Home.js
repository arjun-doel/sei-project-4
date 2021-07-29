import React from 'react'
import NavigationHome from './NavigationHome'
import { Parallax } from 'react-parallax'
import Fade from 'react-reveal/Fade'


const Home = () => {

  const heroMain = 'https://res.cloudinary.com/dlj1sbbtb/image/upload/v1627590070/useLocal-app-data/Front-End/Homepage/outdoor-dining-1846137_1920_nkg8py.jpg'

  return (
    <>
      <div className="home">
        <div className="parrax">
          <Parallax bgImage={heroMain} strength={500}>
            <div style={{ height: 1000 }}>
              <div className="main-header">useLocal</div>
            </div>
          </Parallax>
        </div>


        {/* <Fade top> */}
        <section className="slogan">
          <h2>all the places for the people by the people.</h2>
        </section>
        {/* </Fade> */}

        <div className="second-hero">
          <img id="" src="https://res.cloudinary.com/dlj1sbbtb/image/upload/c_mfit,h_100,q_50,w_1000/v1627080361/useLocal-app-data/Front-End/Homepage/brick-wall-1834784_o2z4v0.jpg" alt="bakery" />
          <Fade right>
            <div className="second-hero-text">
              <h5 id="hero-title">find hundreds of hiden gems in your local area</h5>
              <hr />
            </div>
          </Fade>
        </div>

        <div className="second-hero">
          <Fade left>
            <div className="second-hero-text">
              <h5 id="hero-title">share your experiences on our social platform</h5>
              <hr />
            </div>
          </Fade>
          <img src="https://res.cloudinary.com/dlj1sbbtb/image/upload/c_mfit,q_49,w_1000/v1627048654/useLocal-app-data/Front-End/Homepage/search-4700433_yjzp64.jpg" alt="people at town" />
        </div>
      </div>
      <NavigationHome />
    </>
  )
}

export default Home
