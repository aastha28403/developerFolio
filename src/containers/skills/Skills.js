import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {/* {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )} */}
            <img
              alt="Man Working"
              src={require("../../assets/images/about1.jpeg")}
            ></img>
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {"Our Company"}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {
                "DSDF Consultancy Services Pvt. Ltd., a leader in the test, monitor, troubleshoot and management of networks. We are a tech-driven company founded in 2022. We strive to stay at the forefront of technology, offering cutting-edge products, solution and services to meet the ever-evolving needs of our customers. We aim at helping our customers stay ahead in digital era by providing them with the tools and expertise they need to optimize their network and services."
              }
            </p>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text"
                  : "subTitle skills-text"
              }
            >
              {
                "At DSDF, we believe that technology has the power to change the world for the better and we are dedicated to using our expertise to help our customers achieve their goals. Whether you’re looking to build a new network, upgrade your existing infrastructure or optimize your services, DSDF Consultancy Services has the solutions and expertise you need to succeed including test, monitor, troubleshoot and analytics solutions."
              }
            </p>
          </div>
        </Fade>
      </div>
      <div className="skills-main-div">
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {"Our Objective"}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {
                "To carry on the business of broadcasting, telecasting, relaying, transmitting, distributing or running any video, audio, voice, or other programmers or software ( both proprietary and third party) over television, radio, internet, telecom or any other media. Cable services, offer internet based services & to carry on in India and abroad all kinds of business in the field of telecommunications, information technology, e-commerce, computer hardware & software and all other related business activity"
              }
            </p>
          </div>
        </Fade>
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {/* {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )} */}
            <img
              alt="Man Working"
              src={require("../../assets/images/about2.jpeg")}
            ></img>
          </div>
        </Fade>
      </div>
    </div>
  );
}
