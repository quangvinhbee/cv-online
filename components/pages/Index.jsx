import React from "react";
import Link from "next/link";
import { TimeLine } from "./component/timeline";
import { MySkill } from "./component/myskill";
import { Contact } from "./component/contact";
import { Portfolio } from "./component/portfolio";
import { Introduction } from "./component/introduction";
import { Welcome } from "./component/welcome";

const Index = () => {
  return (
    <>
      <div className="body">
        <div className="session-1">
          <Welcome />
        </div>
        <div className="session-2">
          <Introduction />
        </div>
        <div className="session-3">
          <TimeLine />
        </div>
        <div className="session-4">
          <MySkill />
        </div>
        <div className="session-5">
          <Portfolio />
        </div>
        <div className="session-6">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Index;
