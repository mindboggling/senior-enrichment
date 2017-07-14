import React from 'react';
import CarouselInstance from './Carousel';

const Home = () => (
  <div>
    <CarouselInstance />
    <div className="banner text-center text-inverted">
      <h1>Superheroes Academy</h1>
      <h1><small>Blue Ribbon School to Train All Potentials to Become Legendary Superhoes</small></h1>
    </div>
    <div className="about">
      <div className="inverted">
        <div className="container">
          <br />
          <div className="media-body">
            <span>Welcome to Superheroes Academy!  Here, the aspiring talents are trained to become the most legendary superheroes.  The professors here are all renowned heroes!  If accepted, each student will be trained at state of the art campuses cloned from each of the superhero's famous residences such as the Fortress of Solitude and Asgard!</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
