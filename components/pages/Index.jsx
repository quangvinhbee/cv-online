import React from "react";
import Container from "@material-ui/core/Container";
import Link from "next/link";
import { TimeLine } from "./component/timeline";
import { MySkill } from "./component/myskill";
import { Contact } from "./component/contact";

const Index = () => {
  return (
    <>
      <div className="body">
        <div className="session-1">
          <Container maxWidth="lg">
            <div className="index-caption">
              <h1 className="line-1 anim-typewriter">Hi! I'm Quang Vinh Bee</h1>
              <h3>Design Web, Front end developer - ReactJS</h3>
            </div>
          </Container>
        </div>
        <div className="session-2">
          <div className="header-session">
            <h3>ABOUT ME</h3>
            <h4>GET TO KNOW ME BEFORE YOU CHOOSE ME</h4>
          </div>
          <div className="avt-me">
            <img src="images/avt/1.png" alt="" />
          </div>
          <div className="caption">
            <p>
              I am Lam Vinh, I am studying at the Post and Telecommunication
              Institute of Technology, HCMC. I'm a 4th year student majoring in
              Information Security. I love web programming, I have been learning
              web programming since my freshman year. During my study, I learned
              some frameworks such as Wordpress, Bootstrap, ReactJS, NextJS...
              And I did some related work. I am looking for a job full time in
              Front end web programming (React JS). Thank you for visiting the
              website <i className="fa fa-heart red"></i>
            </p>
          </div>
        </div>
        <div className="session-3">
          <TimeLine />
        </div>
        <div className="session-4">
          <MySkill />
        </div>
        <div className="session-5">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Index;
