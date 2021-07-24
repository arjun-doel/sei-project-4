import React from 'react'
import NavigationHome from './NavigationHome'
import { Parallax } from 'react-parallax'
import Fade from 'react-reveal/Fade'


const Home = () => {

  const heroMain = 'https://res.cloudinary.com/dlj1sbbtb/image/upload/q_57/v1627047358/useLocal-app-data/Front-End/Homepage/cafe-3537801_dbcrli.jpg'

  return (
    <>
      <div className="home">
        <div className="parrax">
          <Parallax bgImage={heroMain} strength={500}>
            <div style={{ height: 800 }}>
              <div className="main-header">useLocal</div>
            </div>
          </Parallax>
        </div>


        <Fade top>
          <section className="slogan">
            <h2>all the places for the people by the people.</h2>
          </section>
        </Fade>

        <div className="second-hero">
          <img id="" src="https://res.cloudinary.com/dlj1sbbtb/image/upload/c_mfit,h_100,q_50,w_1000/v1627080361/useLocal-app-data/Front-End/Homepage/brick-wall-1834784_o2z4v0.jpg" alt="bakery" />
          <div className="second-hero-text">
            <Fade right>
              <h5 id="hero-title">find hundreds of hiden gems in your local area</h5>
              <hr />
            </Fade>
          </div>
        </div>

        <div className="second-hero">
          <div className="second-hero-text">
            <Fade left>
              <h5 id="hero-title">share your experiences on our social platform</h5>
              <hr />
            </Fade>
          </div>
          <img src="https://res.cloudinary.com/dlj1sbbtb/image/upload/c_mfit,q_49,w_1000/v1627048654/useLocal-app-data/Front-End/Homepage/search-4700433_yjzp64.jpg" alt="people at town" />
        </div>
      </div>
      <NavigationHome />
    </>
  )
}

export default Home
