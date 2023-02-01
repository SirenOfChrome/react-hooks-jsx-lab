






import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a software developer who loves to code and solve problems. I know KungFu like Bruce Lee now.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;

//GDC#11
