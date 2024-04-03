/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "High Accuracy CORDIC Algorithm in FPGA Implementation",
    description:
      "Final Year Project (In Progress). Implement pipelined Coordinate Rotation Digital Computer (CORDIC) algorithm on FPGA by utilizing Verilog HDL to achieve computation of sine and cosine values with low relative error.",
    url: "#",
  },
  {
    title: "Solar-Based Power Bank with Fast Charging Monitoring",
    description:
      "Capstone Project. Involved in microcontroller programming to transmit data to Azure IOT Hub using Raspberry Pi Pico and set up a data pipeline to connect Azure MySQL Database.",
    url: "https://github.com/wesleychiang01/dotnet-starter",
  },
  {
    title: "Intellirent – Property Management Software",
    description:
      "Led a team of 5 developers in the successful development of a property management system. Developed the back-end system for the web application using Laravel framework.",
    url: "https://intellirent.site/",
  },
  {
    title: "Classification Model for Well Slugging",
    description:
      "Build and determine the highest performance learning model to predict oil well slugging condition from pre-processed well datasets.",
    url: "https://github.com/wesleychiang01/Classification-Model-for-Well-Slugging",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
