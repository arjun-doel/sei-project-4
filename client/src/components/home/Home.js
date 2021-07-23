import React from 'react'
import NavigationHome from './NavigationHome'
import { Parallax } from 'react-parallax'


const Home = () => {

  const heroMain = 'https://res.cloudinary.com/dlj1sbbtb/image/upload/v1627047358/useLocal-app-data/Front-End/Homepage/cafe-3537801_dbcrli.jpg'

  return (
    <>
      <NavigationHome />
      <div className="home">
        <Parallax bgImage={heroMain} strength={500}>
          <div style={{ height: 700 }}>
            <div className="main-header">useLocal</div>
          </div>
        </Parallax>
        <section className="slogan">
          <h2>All the locations for the people by the people</h2>
        </section>
        <section className="hero-two">
          <div className="people-img">
            <img src="https://res.cloudinary.com/dlj1sbbtb/image/upload/v1627048654/useLocal-app-data/Front-End/Homepage/search-4700433_yjzp64.jpg" alt="people at town" />
          </div>
          <div className="hero-two-txt">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laudantium cum fugit culpa alias tempora labore explicabo illo doloremque, repudiandae nulla maxime ullam quisquam similique aperiam harum magnam iure et.</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
