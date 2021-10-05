import { ImportExport } from "@material-ui/icons";
import Link from "next/link";
export function TimeLine() {
  return (
    <div className="">
      <div className="header-session">
        <h3>VITA</h3>
        <h4>MY WORK STORY</h4>
      </div>
      <div className="my-story">
        <ul className="line">
          {timeline.map((item, index) => {
            return (
              <li key={index}>
                <div className="images-story">
                  <img src={item.img} />
                </div>
                <div className={"caption-story  " + (index%2==0 ?" text-right mr500":" text-left ml500")}>
                  <h3>{item.time}</h3>
                  <h3>{item.title}</h3>
                  {item.description}
                </div>
              </li>
            );
          })}
          
          <li className="end-story">
            <h4>Be part of my story.</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}

const timeline = [
  {
    time: "2014-2017",
    title: "Binh Minh High School",
    img: "images/avt/6.png",
    description: (
      <p>
        - Won 2 second prizes "Tin hoc tre" in 2016 and 2017 <br />- Won 1
        consolation prize "HSG Tin hoc" in 2016
      </p>
    ),
  },
  {
    time: "2017-Now",
    title: "Post and Telecommunication Institute of Technology, HCMC - PTITHCM",
    img: "images/ptit.jpg",
    description: (
      <p>
        - I learned many skills related to programming and security at PTITHCM
        such as: Data Structure and Algorithms, OOP, Web, Web Socket, Web
        Security, Database Security,...
      </p>
    ),
  },
  {
    time: "2017-2019",
    title: "Freelancer",
    img: "images/freelancer.jpg",
    description: (
      <p>
        - While studying, I got some jobs to make money:
        <br />+ Design Logo, Banner, Poster, Video,...
        <br />+ Design and SEO web sales (ladipage, wordpress,...) for several
        clients in HCMC.
        <br /> See more
        <Link href="https://drive.google.com/drive/folders/1OiKDXWM_Hk3SrxXkUt1QOe5bosP2z7P4?usp=sharing">
          My portflio
        </Link>
      </p>
    ),
  },
  {
    time: "Jan 2019 - Jun 2020",
    title: "Lam Beauty Clinic (Part Time)",
    img: "images/lam.png",
    description: (
      <p>
        - I produced media, support marketing and website design (Wordpress).
        <Link href="https://lambeautyclinic.vn/"> Link website</Link>
      </p>
    ),
  },
  {
    time: "Jan 2019 - Now",
    title: "Learn web programming",
    img: "images/frontend.jpg",
    description: (
      <p>
        <b>2019 - May 2020:</b> I learned Java Web (JSP/Servlet, Responsive,
        Bootstrap, MySQL, SQL Server,...). While studying, I did a project on
        the Toeic test. <br />
        Link:
        <Link href="https://github.com/quangvinhbee/Web_Toeic">Source</Link>&
        <Link href="https://www.youtube.com/watch?v=zRWvFNz5fiw">Demo</Link>
        <br />
        <b>May - Now 2020:</b> I learned ES6, SASS, ReactJS, NextJS, Hook,
        Redux, Router, Authentication Firebase, Web API, Restful API, Bootstrap
        UI, Material UI... While studying, I did some projects on the Game Caro
        Multiplayer Online (
        <Link href="https://github.com/quangvinhbee/game-caro-nextjs">
          Source
        </Link>
        &<Link href="https://game-caro.vercel.app/"> Demo</Link>), Todo List (
        <Link href="https://github.com/quangvinhbee/react-redux-router-material">
          Source
        </Link>
        ). Stay tuned to my
        <Link href="https://github.com/quangvinhbee/">github</Link> to see more
      </p>
    ),
  },
  {
    time: "Jan 2021 - Now",
    title: "CÔNG TY CỔ PHẦN GIẢI PHÁP CÔNG NGHỆ MCOM (Fulltime)",
    img: "images/logomcom.png",
    description: <p>- I joined the Smartloyalty project, it was the member 
    management page project (Dashboard). <br />
    - Technologies: Tailwind CSS, Next JS, React Hooks, Context 
    Provider, GraphQL, Firebase...<br />
    - Demo:<Link href="https://smartloyalty.mcom.app/"> https://smartloyalty.mcom.app/</Link></p>,
  },
  {
    time: "Future",
    title: "Learn more",
    img: "images/learnmore.png",
    description: <p>- I will learn NodeJS, AngularJS, VueJS, ...</p>,
  },
];
