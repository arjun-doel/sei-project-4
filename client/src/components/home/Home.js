import React from 'react'
import NavigationHome from './NavigationHome'
import { Parallax } from 'react-parallax'


const Home = () => {

  const heroMain = 'https://res.cloudinary.com/dlj1sbbtb/image/upload/q_57/v1627047358/useLocal-app-data/Front-End/Homepage/cafe-3537801_dbcrli.jpg'

  return (
    <>
      <NavigationHome />
      <div className="home">
        <Parallax bgImage={heroMain} strength={500}>
          <div style={{ height: 700 }}>
            <div className="main-header">useLocal</div>
          </div>
        </Parallax>

        <Parallax strength={500}>
          <section className="slogan">
            <h2>all the locations for the people by the people.</h2>
          </section>
        </Parallax>

        <section className="hero-two">
          <div className="people-img">
            <img src="https://res.cloudinary.com/dlj1sbbtb/image/upload/q_48/v1627048654/useLocal-app-data/Front-End/Homepage/search-4700433_yjzp64.jpg" alt="people at town" />
          </div>
          <div className="hero-two-txt">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, suscipit itaque eius commodi non sint illo magnam reprehenderit ipsam enim nostrum ex doloribus rem aspernatur nobis dolorum exercitationem. Eveniet, dolore!
              Labore, amet. Exercitationem dignissimos dolore consectetur sequi voluptatibus dolor aliquam sed necessitatibus, similique inventore doloribus assumenda consequatur officia odit neque numquam, ut alias et qui nesciunt optio. Est, dolore tempora.
              Omnis quibusdam repellendus nisi, velit perferendis aliquid porro qui aspernatur ducimus in asperiores doloribus ipsa unde praesentium magni illo quis sequi voluptatibus maiores veritatis. Ea quisquam velit earum nam dolor?
              Minus, perferendis expedita.</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
