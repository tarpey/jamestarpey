import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <section>
        <h2>Hello</h2>
        <p>
          I'm a UX Designer with over 10 years experience in the public sector.
          I’m currently a Senior Content and UX Designer at{" "}
          <a href="https://bristol.gov.uk">Bristol City Council</a>.
        </p>
        <p>
          <Link to="about">More...</Link>
        </p>
      </section>
      <section>
        <h2>Work</h2>
        <div className="grid">
          <div className="grid-item">
            <h3>Cards!</h3>
            <p>Multiplayer card battle game. Built with React and Firebase.</p>
            <p>
              <a href="https://cards.jamestarpey.com">
                https://cards.jamestarpey.com
              </a>
            </p>
          </div>
          <div className="grid-item">
            <h3>Teamsheet</h3>
            <p>
              Organise football matches with friends. Built with React Native.
            </p>
            <p>
              <a href="https://teamsheet.app">https://teamsheet.app</a>
            </p>
          </div>
          <div className="grid-item">
            <h3>RocketRacer</h3>
            <p>Race rockets in lockdown. Built with React and Firebase.</p>
            <p>
              <a href="https://rocketracer.app">https://rocketracer.app</a>
            </p>
          </div>
          <div className="grid-item">
            <h3>Avon Tennis</h3>
            <p>Official Avon Tennis website. Built with WordPress.</p>
            <p>
              <a href="https://avontennis.org.uk">https://avontennis.org.uk</a>
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          <a href="mailto:hello@jamestarpey.com">hello@jamestarpey.com</a>
        </p>
      </section>
    </>
  );
};
